import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ContactCard.css";

ContactCard.propTypes = {
    contact: PropTypes.object,
};

function ContactCard(props) {
    const [iconAddress, setIconAddress] = useState("fa fa-plus");
    const [iconCompany, setIconCompany] = useState("fa fa-plus");
    const [showAddress, setShowAddress] = useState(false);
    const [showCompany, setShowCompany] = useState(false);

    return (
        <div className="Contact-Card-Container">
            <div className="Contact-Card">
                {/* I have not used dl, dd, and dt tags here for making use of css easier */}
                <p />
                <h2>{props.contact.name}</h2>
                <p>
                    Email:{" "}
                    <a href={"mailto:" + props.contact.email}>
                        {props.contact.email}
                    </a>
                </p>
                <p>
                    Phone:{" "}
                    <a href={"tel:" + props.contact.phone}>
                        {props.contact.phone}
                    </a>
                </p>
                <p>
                    Website:{" "}
                    <a
                        href={"https://" + props.contact.website}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        {props.contact.website}
                    </a>
                </p>
                <p>Username: {props.contact.username}</p>

                {/* Address Details */}
                <p
                    onClick={function () {
                        if (showAddress) {
                            setIconAddress("fa fa-plus");
                            setShowAddress(false);
                        } else {
                            setIconAddress("fa fa-minus");
                            setShowAddress(true);
                        }
                    }}
                >
                    Address <i className={iconAddress} />{" "}
                </p>
                <div
                    className={"Address-Block" + (showAddress ? " active" : "")}
                >
                    <p>{props.contact.address.suite},</p>
                    <p>{props.contact.address.street},</p>
                    <p>{props.contact.address.city}</p>
                    <p>{props.contact.address.zipcode}</p>
                    <p>
                        <a
                            href={`https://maps.google.com/?q=${props.contact.address.geo.lat},${props.contact.address.geo.lng}`}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Go there <i className="fa fa-external-link" />
                        </a>
                    </p>
                </div>

                {/* Alternate implementation using details */}
                {/* <details>
                    <summary>
                        Address
                    </summary>
                    <div>
                        <p>{props.contact.address.suite},</p>
                        <p>{props.contact.address.street},</p>
                        <p>{props.contact.address.city}</p>
                        <p>{props.contact.address.zipcode}</p>
                        <p>
                            <a
                                href={`https://maps.google.com/?q=${props.contact.address.geo.lat},${props.contact.address.geo.lng}`}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Go there <i className="fa fa-external-link" />
                            </a>
                        </p>
                    </div>
                </details> */}

                {/* Company Details */}
                <p
                    onClick={function () {
                        if (showCompany) {
                            setIconCompany("fa fa-plus");
                            setShowCompany(false);
                        } else {
                            setIconCompany("fa fa-minus");
                            setShowCompany(true);
                        }
                    }}
                >
                    Works at: {props.contact.company.name}{" "}
                    <i className={iconCompany} />{" "}
                </p>
                <div
                    className={"Company-Block" + (showCompany ? " active" : "")}
                >
                    <p>
                        <i>{props.contact.company.catchPhrase}</i>
                    </p>
                    <p>{props.contact.company.bs}</p>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;
