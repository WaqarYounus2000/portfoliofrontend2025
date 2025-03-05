import "./Button.css"



function Button(props) {
    return (
        <>
            <button class="Btn">
                <div class="sign">{<props.icon />}</div>
                <div class="text"><a className="anchorTag">{props.Text}</a></div>
            </button>



        </>
    )
}


export { Button }