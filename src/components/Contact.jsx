import './assets/css/Contact.css'
import { Link } from 'react-router-dom'
const Contact = () => {
    return (
        <div className="contact_page_wrapper">
        <div className="contact">
            <h3>Contact</h3>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>


            <div className="form_wrapper">
                <form action="">

                    <div className="name">
                        <div className="form_item" id='fname'>
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" placeholder="Enter your first name" />
                        </div>

                        <div className="form_item" id='lname'>
                        <label htmlFor="last_name">Last Name</label>
                            <input type="text" placeholder="Enter your last name" />
                        </div>
                    </div>

                    <div className="email">
                        <div className="form_item">
                        <label htmlFor="email">Email</label>
                            <input type="email" placeholder="yourname@email.com" />
                        </div>
                    </div>

                    <div className="message">

                        <div className="form_item">
                        <label htmlFor="message">Message</label>
                            <textarea name="message" id="" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
                        </div>
                    </div>

                    
                    <div className="data">
                        <div className="form_item_checkbox">
                            <input type="checkbox" className='checkbox' />
                        </div>

                        <div className="form_item">
                            <p>You agree to providing your data to Habeeb who may contact you.</p>
                        </div>
                    </div>

                    <div className="button">
                        <div className="form_item">
                            <button type="submit">Send Message</button>
                        </div>
                    </div>

                </form>
            </div>

        </div>


        </div>



    )
}

export default Contact