import React from 'react'

export default ({
    el,
    index,
    handelClick
    }) => {
        return(
            <div className="row">
                <div className="col-lg-6">
                    <div className="input-group">
                        <span className="input-group-btn">
                        <button 
                        className="btn btn-default" 
                        type="button"
                        onClick={() => {handelClick(index)}}
                        >
                        x
                        </button>
                        </span>
                        <div className="form-control">
                            {`${el.text}  at  ${
                                new Date(el.data).toLocaleDateString()
                                }`}
                        </div>
                    </div>
                </div>
            </div>
        )
    }