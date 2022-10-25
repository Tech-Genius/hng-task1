import profile from './assets/images/profile__img.png'
import slack from './assets/images/slack.png'
import github from './assets/images/github.png'
import './assets/css/Home.css'
import zuri_logo from './assets/images/zuri_intern_logo.png'
import I4G_logo from './assets/images/I4G.png'



const Home = () => {


    return(
        <div className="home">
            <div className="profile_img">
                <img src={profile} id='profile__img' />
                <h3 id='twitter'>coding__always</h3>
                <h3 id='slack' hidden='true'>Coderender</h3>
            </div>
            

            <div className="links">
                <a href="https://twitter.com/coding__always" id='twitter' target='_blank'><p>Twitter Link</p></a>
                <a href="https://training.zuri.team/" id='btn_zuri' target='_blank'><p>Zuri Team</p></a>
                <a href="http://books.zuri.team" id='books' target='_blank'><p>Zuri Books</p></a>
                <a href="https://books.zuri.team/python-for-beginners?ref_id=Coderender" target='_blank'><p>Python Books</p></a>
                <a href="https://background.zuri.team" id='pitch' target='_blank'><p>Background Check for Code</p></a>
                <a href="https://books.zuri.team/design-rules" target='_blank' id='book_design'><p>Design Books</p></a>

            </div>

            <div className="logos">
                <img src={slack} alt="" />
                <img src={github} alt="" />
            </div>

            <div className="footer">
                <img src={zuri_logo} alt="" />
                <p>HNG Internship 9 Frontend Task</p>
                <img src={I4G_logo} alt="" />
            </div>
        </div>
    )

}

export default Home