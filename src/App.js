import { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import "./App.css";

function App() {
    const [jsonArray, setJsonArray] = useState([]);

    // setTimeout(() => {
    //     console.log("TIMEOUT!", jsonArray.length);
    //     setVal();
    // }, 1000);

    useEffect(() => {
        document.querySelector(".Content").style.marginTop =
            "calc(" +
            document.querySelector(".Header-Row").offsetHeight +
            "px + 1vmin)";
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                setJsonArray(json);
            });
    }, []);

    window.onresize = function () {
        document.querySelector(".Content").style.marginTop =
            "calc(" +
            document.querySelector(".Header-Row").offsetHeight +
            "px + 1vmin)";
    };

    return (
        <div className="App">
            <div className="Container-Main">
                <div className={"Inner-Row Header-Row"}>
                    <h1>Contacts</h1>
                </div>
                <div className="Inner-Row Content">
                    <div className="Contacts-Holder">
                        {jsonArray.map((contact) => {
                            return (
                                <ContactCard
                                    key={contact.id}
                                    contact={contact}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
