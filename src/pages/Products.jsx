import React from 'react'

export default function Products() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center mb-5">
          <h2 className="heading-section">Table #05</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="table-wrap">
            <table className="table table-responsive-xl">
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Email</th>
                  <th>Username</th>
                  <th>Status</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr className="alert" role="alert">
                  <td>
                    <label className="checkbox-wrap checkbox-primary">
                      <input type="checkbox" checked />
                      <span className="checkmark"></span>
                    </label>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="img">
                      <img src="/public/images/no-image.png" alt="" />
                    </div>
                    <div className="pl-3 email">
                      <span>markotto@email.com</span>
                    </div>
                  </td>
                  <td>Markotto89</td>
                  <td className="status">
                    <span className="active">Active</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">
                        <i className="fa fa-close"></i>
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className="alert" role="alert">
                  <td>
                    <label className="checkbox-wrap checkbox-primary">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="img">
                      <img src="/public/images/no-image.png" alt="" />
                    </div>
                    <div className="pl-3 email">
                      <span>jacobthornton@email.com</span>
                    </div>
                  </td>
                  <td>Jacobthornton</td>
                  <td className="status">
                    <span className="waiting">Waiting for Resassignment</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">
                        <i className="fa fa-close"></i>
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className="alert" role="alert">
                  <td>
                    <label className="checkbox-wrap checkbox-primary">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="img">
                      <img src="/public/images/no-image.png" alt="" />
                    </div>
                    <div className="pl-3 email">
                      <span>larrybird@email.com</span>
                    </div>
                  </td>
                  <td>Larry_bird</td>
                  <td className="status">
                    <span className="active">Active</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">
                        <i className="fa fa-close"></i>
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className="alert" role="alert">
                  <td>
                    <label className="checkbox-wrap checkbox-primary">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </td>
                  <td className="d-flex align-items-center">
                    <div className="img">
                      <img src="/public/images/no-image.png" alt="" />
                    </div>
                    <div className="pl-3 email">
                      <span>johndoe@email.com</span>
                    </div>
                  </td>
                  <td>Johndoe1990</td>
                  <td className="status">
                    <span className="active">Active</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">
                        <i className="fa fa-close"></i>
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className="alert" role="alert">
                  <td className="border-bottom-0">
                    <label className="checkbox-wrap checkbox-primary">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </td>
                  <td className="d-flex align-items-center border-bottom-0">
                    <div className="img">
                      <img src="/public/images/no-image.png" alt="" />
                    </div>
                    <div className="pl-3 email">
                      <span>garybird@email.com</span>
                    </div>
                  </td>
                  <td className="border-bottom-0">Garybird_2020</td>
                  <td className="status border-bottom-0">
                    <span className="waiting">Waiting for Resassignment</span>
                  </td>
                  <td className="border-bottom-0">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">
                        <i className="fa fa-close"></i>
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
