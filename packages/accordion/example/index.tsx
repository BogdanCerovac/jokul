import React from "react";
import ReactDOM from "react-dom";
import "../accordion.scss";

const App = () => (
    <>
        <div className="jkl-accordion" style={{ width: 700 }}>
            <div className="jkl-accordion-item jkl-accordion-item--expanded">
                <button className="jkl-accordion-item__title">
                    <div className="jkl-accordion-item__title-text">Tekst som står her</div>
                    <div className="jkl-accordion-item__title-icon" />
                </button>
                <div className="jkl-accordion-item__content">
                    Now let&lsquo;s use some more properties. Consider a list of 6 items, all with a fixed dimensions in
                    a matter of aesthetics but they could be auto-sized. We want them to be evenly and nicely
                    distributed on the horizontal axis so that when we resize the browser, everything is fine (without
                    media queries!).
                </div>
            </div>
            <div className="jkl-accordion-item">
                <button className="jkl-accordion-item__title">
                    <div className="jkl-accordion-item__title-text">Second item</div>
                    <div className="jkl-accordion-item__title-icon" />
                </button>
                <div className="jkl-accordion-item__content">
                    <p>This is a paragraph</p>
                    <p>Another paragraph&hellip;</p>
                </div>
            </div>
            <div className="jkl-accordion-item">
                <button className="jkl-accordion-item__title">
                    <div className="jkl-accordion-item__title-text">Third item</div>
                    <div className="jkl-accordion-item__title-icon" />
                </button>
                <div className="jkl-accordion-item__content">
                    <p>This is a paragraph</p>
                    <p>Another paragraph&hellip;</p>
                </div>
            </div>
        </div>
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));
