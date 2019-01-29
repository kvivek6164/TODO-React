import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        return (
            <div className="modal" id="basicModal">
            {/*  style={{display: 'block'}} */}
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 className="modal-title" id="myModalLabel">Basic Modal</h4>
                        </div>
                        <div className="modal-body">
                            <h3>Modal Body</h3>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}