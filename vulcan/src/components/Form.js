function Form() {
    return (
        <form action="" method="post" className="sign-up-form">
            <label className="sign-up-label" htmlFor="userEmail">Stay in the know. Sign up for our newsletter.</label>
            <div>
                <input className="sign-up-input" type="text" placeholder="Enter your email" />
                <button className="sign-up-btn">SUBMIT</button>
            </div>
        </form>
    )
}

export default Form;