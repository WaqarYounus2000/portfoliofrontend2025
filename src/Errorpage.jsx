import "./Error.css"
function Error() {
    return (
        <>
            <section className="errorsection">
                <div className="titleDiv">
                    <h2 className="titleHeading">Uh-Oh...</h2>
                </div>
                <div className="msgdiv">
                    <h3 className="msgheading">The page you are looking for may have been removed,deleted <br /> or possible never existed</h3>
                </div>
                <div className="errorCode">
                    <h1 className="Error">404</h1>

                </div>

            </section>
        </>
    )
}

export { Error }

