---
date: 2017-01-16
title: Dependency Inversion
categories:
  - principle
description: SOLID Design Principles. A specific form of decoupling software modules.
type: Document
---

依赖倒置，用来解耦软件模块之前的依赖。

* 高层模块不因该依赖低层模块。都因该依赖于抽象层（如interface）
* 抽象层不因该依赖于细节，细节因该依赖于抽象

[WIKI](https://en.wikipedia.org/wiki/Dependency_inversion_principle)

### Bad example

Http是高层模块，XMLHttpService是低层模块，如果直接依赖，会导致高层模块需要知道低层模块的实现细节。

~~~python
class XMLHttpService(XMLHttpRequestService):
    pass

class Http:
    def __init__(self, xml_http_service: XMLHttpService):
        self.xml_http_service = xml_http_service
    
    def get(self, url: str, options: dict):
        self.xml_http_service.request(url, 'GET')

    def post(self, url, options: dict):
        self.xml_http_service.request(url, 'POST')
~~~


### Good example

高层和低层都以抽象层进行交互，消除了依赖，并方便拓展

~~~python
#抽象层
class Connection:
    def request(self, url: str, options: dict):
        raise NotImplementedError

#高层
class Http:
    def __init__(self, http_connection: Connection):
        self.http_connection = http_connection
    
    def get(self, url: str, options: dict):
        self.http_connection.request(url, 'GET')

    def post(self, url, options: dict):
        self.http_connection.request(url, 'POST')

#低层
class XMLHttpService(Connection):
    xhr = XMLHttpRequest()

    def request(self, url: str, options:dict):
        self.xhr.open()
        self.xhr.send()
        
class NodeHttpService(Connection):
    def request(self, url: str, options:dict):
        pass

class MockHttpService(Connection):
    def request(self, url: str, options:dict):
        pass
~~~