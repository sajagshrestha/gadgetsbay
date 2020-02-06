import React from "react";
import "./AdForm.css";
const AdForm = () => {
    return (
        <div className="container mt-5 ">
            <form>
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">
                        Title
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="Enter title here"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        HtmlFor="descrition"
                        className="col-sm-2 col-form-label"
                    >
                        Description
                    </label>
                    <div className="col-sm-10">
                        <textarea
                            className="form-control"
                            id="descrition"
                            placeholder="Enter description here"
                            rows="4"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="price" className="col-sm-2 col-form-label">
                        Price
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="price"
                            placeholder="Enter price here"
                            value={`Rs.`}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AdForm;
