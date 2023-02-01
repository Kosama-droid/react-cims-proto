export function Modals ({ place, handleClose, handleChange }) {
    return (
      <dialog id="modal-place" open>
        <article>
          <a href="#close"
            aria-label="Close"
            className="close"
            data-target="modal-place"
            onClick={handleClose}
          > </a>
          <hgroup>
            <div style={{
              display: "flex",
              gap: '1rem'
            }}>
              <hgroup>
                <h1>{place.name}</h1><br/>
                <p>{place.city}</p><br/>        
              </hgroup>
            </div>
          </hgroup>
        </article>
      </dialog>
    )
  }