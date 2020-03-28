import React, { Component } from 'react';

export default class Home extends Component {

  render() {
    return (
      <div className="">
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1 className="font-weight-light">适合的，才是最好的</h1>
              <p className="lead"> 端到端IT解决方案 - 让我们成为计算机的朋友，共享美好生活</p>
            </div>
          </div>
        </div>
      </header>
        <section className="py-5">
          <div className="container">
            <h2 className="font-weight-light">Page Content</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab nulla dolorum autem nisi
              officiis blanditiis voluptatem hic, assumenda aspernatur facere ipsam nemo ratione cumque magnam enim
              fugiat reprehenderit expedita.</p>
          </div>
        </section>
      </div>
    );
  }
}
