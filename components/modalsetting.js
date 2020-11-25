import React from "react";

export default function modalsetting() {
  return (
    <div>
      <a
        class="mb-xs mt-xs mr-xs modal-basic btn btn-default"
        href="#modalCenterIcon"
      >
        Center Icon
      </a>
      <div
        id="modalCenterIcon"
        class="modal-block modal-block-primary mfp-hide"
      >
        <section class="panel">
          <div class="panel-body text-center">
            <div class="modal-wrapper">
              <div class="modal-icon center">
                <i class="fa fa-question-circle"></i>
              </div>
              <div class="modal-text">
                <h4>Are you sure?</h4>
                <p>Are you sure that you want to delete this image?</p>
              </div>
            </div>
          </div>
          <footer class="panel-footer">
            <div class="row">
              <div class="col-md-12 text-right">
                <button class="btn btn-primary modal-confirm">Confirm</button>
                <button class="btn btn-default modal-dismiss">Cancel</button>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}
