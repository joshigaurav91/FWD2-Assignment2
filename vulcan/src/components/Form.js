function Form() {
    return (
        <form action="" method="post" className="sign-up-form">
            <div className="sign-up-block">
                <label className="sign-up-label" htmlFor="userEmail">Stay in the know. Sign up for our newsletter.</label>
                <div className="input-row">
                    <input className="sign-up-input" type="text" placeholder="Enter your email" />
                    <button className="sign-up-btn" type="submit">SUBMIT</button>
                </div>
            </div>
        </form>
    )
}

export default Form;