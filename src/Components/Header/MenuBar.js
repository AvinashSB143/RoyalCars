import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import "../../styles/styles.css"
import "./header.css"

const MenuBar = () => {
    const [index, setIndex] = useState(0);

const Culture = ["https://thumbs.dreamstime.com/z/business-meeting-word-culture-table-top-view-people-people-having-discussing-over-work-office-91587859.jpg",
,"https://assets.ltkcontent.com/images/7206/examples-of-culture_0066f46bde.jpg",
"https://media.istockphoto.com/photos/global-culture-picture-id1278525359?b=1&k=20&m=1278525359&s=170667a&w=0&h=-YF9ut3C7_eFlaw6qfqIkgH03YRq_seh18o4zxSZEZ8="]
    
const investor = ["https://tse1.mm.bing.net/th?id=OIP.4z0INfDirgDYVvgHvGXbugHaBc&pid=Api&P=0&w=529&h=104",
"https://jri-ltd.com/images/2020/01/08/investors_in_people_logo.png",
"https://tse4.mm.bing.net/th?id=OIP.dLXdxDxow35I59vrQQ_qNQHaBH&pid=Api&P=0&w=616&h=93",
"https://tse1.mm.bing.net/th?id=OIP.THsbqlu1X5v-NHb0HPekCwHaB1&pid=Api&P=0&w=492&h=123"
]

let slideIndex = 1;

const plusSlides = (n) => {
 return slideIndex += n;
}

return (
        <div>
            <div className="main_container column_container">
                <div className = "more_about_us" style = {{backgroundImage : `url("https://singularityhub.com/wp-content/uploads/2019/02/cockpit-view-self-driving-car-night-automation-shutterstock-685666552-1068x601.jpg")`}}>
                    <div style={{
                        position: "relative",
                        top: "25%"
                    }}>
                    <h1>In it to drive it</h1>
                    <h2>
                        <span>Four wheels fuel a billion dreams and</span>
                        <br />
                        <span>for every dream there is a Royal Cars
                        <sup>®</sup>
                        </span>
                    </h2>
                    {/* <div className="about_us_button_container">
                        <button className = "about_us_button">Watch the film</button>
                    </div> */}
                    </div>
                </div>
                <div className="about_us_card_container about_us_main">
                    <div className="about_us_card">
                        <img className="about_us_card_img" alt="About Us"
                        src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_25/1347178/family-road-trip-stock-today-180619-tease-02.jpg"></img>
                    <h3>We are about making car ownership accessible, simple and delightful</h3>
                    <p>With rich experience in the car market space, Royal Cars is the one-stop destination for all the best pre-owned cars in Mangalore.</p>
                    </div>
                    <div className="about_us_card">
                        <img className="about_us_card_img" alt="About Us"
                        src="https://www.wardsauto.com/sites/wardsauto.com/files/styles/article_featured_retina/public/happy%20young%20customer.jpg?itok=_7ONcJ9u"></img>
                    <h3>happy customers, here’s what one has to say</h3>
                    <p>With rich experience in the car market space, Royal Cars is the one-stop destination for all the best pre-owned cars in Mangalore.</p>
                    </div>
                </div>
                <div className="importantTo_us about_us_main">
                    <h3>What's important to us</h3>
                    <div className="importantTo_us_card">
                        <div className = "importantTo_us_card_list">
                            <img alt="Quality Reasons" src = "https://www.google.com/search?q=car+icon+svg&bih=657&biw=1366&rlz=1C1CHZL_enIN711IN712&hl=en&sxsrf=AOaemvJ-9qqf1xP4FtOTDbgBBZwER1Q2LA:1635685944399&tbm=isch&source=iu&ictx=1&fir=7m4hp2lPaAvPjM%252CnqhAlX2a6HZK0M%252C_%253BqAQmBMX5URAb6M%252CTuwJ5awS3qU0vM%252C_%253BcQs86BYMDI1WYM%252CykM--IYvbpYdAM%252C_%253BxghgPv4by5ySsM%252CLvW2l0HWv0Fn9M%252C_%253BRyMkwO6iR_bLtM%252Ci7cn3RsDVODiiM%252C_%253B2ywf-nuH3GliOM%252CmrUsA8b6UVwgEM%252C_%253B82WPO-QUYtD7mM%252CJEu0XRL9UsPRKM%252C_%253B2kx7Hpj7nPykVM%252Cm0GY8aknX5v0DM%252C_%253BpUKs0A7g40TlNM%252COuAAJEkI-WOLrM%252C_%253B27e1yLZP63QyRM%252CDEAg6VAxAeF8eM%252C_%253BpQm0KzHLfPddHM%252C8NFZSMFcjX7kuM%252C_%253BoD3WjMg7vakCIM%252CaPcleUTkz8bHrM%252C_%253B9LM2DFn1k3EJOM%252C8HzCa8DY7bkedM%252C_%253BCwY6vB-u2bD2pM%252C-oU8zz6rQ1C6sM%252C_%253Bs0fT2R1BLbBRbM%252C7rYQWsh8ZCdTtM%252C_&vet=1&usg=AI4_-kRYaSVquimTUKXPemoqCyFEc-e8xw&sa=X&ved=2ahUKEwip07f93PTzAhX1zTgGHUDICf0Q9QF6BAgREAE#imgrc=pQm0KzHLfPddHM"></img>
                            <h4>Quality</h4>
                            <p>Our cars are the reason we are in business and will be why we continue to exist and attract customers. Quality at every touchpoint for our customers, is just as important to us for we are a service-first brand.</p>
                        </div>
                        <div className = "importantTo_us_card_list">
                            <img alt="Transparency & Accountability" src = "https://www.google.com/search?q=quality.svg&rlz=1C1CHZL_enIN711IN712&sxsrf=AOaemvLke4N_LYaM0DjlO0AY-ZELQnZqKg:1635680541294&tbm=isch&source=iu&ictx=1&fir=wABPeGsnauCPvM%252C26dHwpWMa4RjbM%252C_%253B5KTGnYErpGkGeM%252CCS1S2jU8gWPuqM%252C_%253BRFcnpA0kQSIu9M%252CtO53w3i7u5cBAM%252C_%253Bs-SuxwddQU9aMM%252CknH8bIl9BubghM%252C_%253BeDtfXQkavoqR9M%252C5XZNcU1fL6fL_M%252C_%253BRQOnzMfkxXzhVM%252C5XZNcU1fL6fL_M%252C_%253Bdt36A40TOsI6DM%252CDoV49Mp7LNeR3M%252C_%253BsS2Uqf3wHLvFzM%252CknH8bIl9BubghM%252C_%253BjvKTX01xZBs1xM%252Cgq5THSoOTrq0BM%252C_%253Ba80p6mlJlA6-YM%252CHDNn48TmBqq4nM%252C_%253B5W5q64QUbWVn9M%252CHDNn48TmBqq4nM%252C_%253BBKLVqn6ULwSBmM%252CHDNn48TmBqq4nM%252C_%253BNSS-M5raf1FvnM%252CtO53w3i7u5cBAM%252C_%253BGrgZkI-xLvijYM%252CBZ4Tjb7RTzLm8M%252C_%253B85LEticY_f7swM%252CtO53w3i7u5cBAM%252C_%253BlUJ23TGmJ7_0hM%252CHDNn48TmBqq4nM%252C_&vet=1&usg=AI4_-kRl0U58bKQRBJwirXrMynuTNNGhjQ&sa=X&ved=2ahUKEwj9soTtyPTzAhUhzzgGHW6ACz0Q9QF6BAgXEAE#imgrc=RQOnzMfkxXzhVM"></img>
                            <h4>Transparency & Accountability</h4>
                            <p>It brings trust. Laying bare every available fact about our car at our hubs, after our stringent vetting process, reassures customers. A range of industry-first offerings including Royal Cars Assured ® mean that we are not just in the pre-owned car business, but in the business of growing and building relationships with our customers.</p>
                        </div>
                        <div className = "importantTo_us_card_list">
                            <img alt="Persanolized Experience" src = "https://www.google.com/search?q=quality.svg&rlz=1C1CHZL_enIN711IN712&sxsrf=AOaemvLke4N_LYaM0DjlO0AY-ZELQnZqKg:1635680541294&tbm=isch&source=iu&ictx=1&fir=wABPeGsnauCPvM%252C26dHwpWMa4RjbM%252C_%253B5KTGnYErpGkGeM%252CCS1S2jU8gWPuqM%252C_%253BRFcnpA0kQSIu9M%252CtO53w3i7u5cBAM%252C_%253Bs-SuxwddQU9aMM%252CknH8bIl9BubghM%252C_%253BeDtfXQkavoqR9M%252C5XZNcU1fL6fL_M%252C_%253BRQOnzMfkxXzhVM%252C5XZNcU1fL6fL_M%252C_%253Bdt36A40TOsI6DM%252CDoV49Mp7LNeR3M%252C_%253BsS2Uqf3wHLvFzM%252CknH8bIl9BubghM%252C_%253BjvKTX01xZBs1xM%252Cgq5THSoOTrq0BM%252C_%253Ba80p6mlJlA6-YM%252CHDNn48TmBqq4nM%252C_%253B5W5q64QUbWVn9M%252CHDNn48TmBqq4nM%252C_%253BBKLVqn6ULwSBmM%252CHDNn48TmBqq4nM%252C_%253BNSS-M5raf1FvnM%252CtO53w3i7u5cBAM%252C_%253BGrgZkI-xLvijYM%252CBZ4Tjb7RTzLm8M%252C_%253B85LEticY_f7swM%252CtO53w3i7u5cBAM%252C_%253BlUJ23TGmJ7_0hM%252CHDNn48TmBqq4nM%252C_&vet=1&usg=AI4_-kRl0U58bKQRBJwirXrMynuTNNGhjQ&sa=X&ved=2ahUKEwj9soTtyPTzAhUhzzgGHW6ACz0Q9QF6BAgXEAE#imgrc=RQOnzMfkxXzhVM"></img>
                            <h4>Persanolized Experience</h4>
                            <p>Every customer is unique; each demands different things from a set of four wheels. That’s why our inventory is varied and the people you meet in your interactions with Royal Cars are trained to listen first and at length, then make recommendations.</p>
                        </div>
                    </div>
                </div>
                <div className = "SquadSpinny about_us_main">
                    <img alt="Squad Royal Cars"
                    src = "https://media.istockphoto.com/photos/sea-of-hands-picture-id857146092?b=1&k=20&m=857146092&s=170667a&w=0&h=6LFXDhgmrAKxwIFFgt5ctdMooP_WgLlmeX6yhq7a174="></img>
                    <div className="SquadSpinny_contentwrap">
                        <h3>Squad Royal Cars</h3>
                        <p>Our team is our beating heart. Each member of our squad intrinsically believes in what brand Royal Cars stands for and does. It's a case of mission meets vision meets highly motivated squad, each of whom understand that the needs and aspirations of every customer are unique. 
                            <br/><br/>
                            This mindset helps us attract and retain the best talent - whether on our shop floors, our workshops, or as our ambassadors before the car-buying customers.
                            <br />
                        </p>
                    </div>
                </div>
                <div className = "Culture about_us_main">
                    <div className="Culture_carouselWrrapper">
                        <div className = "Culture_carouselselection">
                            <div className="Culture_carousel_roundedcorner">
                            <div className="slideshowSlider"
                        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                        {Culture.map((images, index) => (
                        <div className="slide"
                        key={index}
                        style={{ backgroundImage: `url(${images})` }}>
                        </div>
                        ))}
                        </div>
                        <a className="prev" onClick={plusSlides(-1)}>&#10094;</a>
                        <a className="next" onClick={plusSlides(1)}>&#10095;</a>
                            </div>

                            <div className="Culture_carousel_banner">
                                <div className="Culture_carousel_bannerwrap">
                                    <div className="slideshowDots">
                                {Culture.map((_, idx) => (
                                 <div
                                    key={idx}
                                    className={`slideshowDot${index === idx ? " active" : ""}`}
                                    
                                ></div>
                                 ))}
                             </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="Culture_contentwrap">
                    <h3>Culture</h3>
                    <p>The Royal Cars badge runs deep. With transparency, integrity, focus on quality and genuine car love. Working at Royal Cars means a high degree of autonomy, the freedom to make one's own decisions, and a decidedly non-hierarchical structure. Everyone knows what they're doing, enjoy their work and as luck would have it, love what they're doing - driving a billion dreams.</p>
                </div>
                </div>
                <div className="our_backers">
                    <div className = "about_us_main">
                        <div className="investor_container">
                            <h3>Our Backers</h3>
                            <div className="investor_list">
                                    {investor.map((imag) => (
                                        <img src = {imag} />
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className = "press_section">
                    <h3>Press</h3>
                    <div className="press_content_wrapper">
                        <div className="press_content">
                            <div className ="press_content_list">
                                <a className="press_content_img"
                                href = "https://yourstory.com/2020/08/spinny-startup-pre-owned-car-market/amp">    
                                <div className = "press_imgContainer">
                                    <img alt="own a pre-owned car" src="https://images.squarespace-cdn.com/content/v1/564b6866e4b0c5929314d76f/1542059458363-DMWZVMBQVTIOM44WE6I1/What_is_your_story.jpg?format=1000w">
                                    </img>
                                </div>
                                <div className = "press_descContainer">
                                <p>How Royal Cars is re-defining the pre-owned car market through its platform</p>
                                </div>
                                </a>
                                <a className="press_content_img"
                                href = "https://yourstory.com/2020/08/spinny-startup-pre-owned-car-market/amp">    
                                <div className = "press_imgContainer">
                                    <img alt="Pre-owned car redefined" src="https://www.egis-india.com/sites/egis-india.com/files/styles/largeur_page/public/fe.png?itok=iyIILABn">
                                    </img>
                                </div>
                                <div className = "press_descContainer">
                                <p>Full-stack concept explained with benefits</p>
                                </div>
                                </a>
                                <a className="press_content_img"
                                href = "https://yourstory.com/2020/08/spinny-startup-pre-owned-car-market/amp">    
                                <div className = "press_imgContainer">
                                    <img alt="360-degree interactive view" src="https://img.etimg.com/thumb/msid-69088793,width-1200,height-900/industry/media/entertainment/media/the-economic-times-trumps-all-business-dailies-combined.jpg">
                                    </img>
                                </div>
                                <div className = "press_descContainer">
                                <p>Royal Cars brings in 360-degree interactive view of used cars</p>
                                </div>
                                </a>
                                <a className="press_content_img"
                                href = "https://yourstory.com/2020/08/spinny-startup-pre-owned-car-market/amp">    
                                <div className = "press_imgContainer">
                                    <img alt="Accel-backed royal cars" src="https://entrackr.com/wp-content/uploads/2019/03/funding-.jpg">
                                    </img>
                                </div>
                                <div className = "press_descContainer">
                                <p>Accel-backed Royal Cars acquaries used cars marketplace Truebil</p>
                                </div>
                                </a>
                                {/* <a className="press_content_img"
                                href = "https://yourstory.com/2020/08/spinny-startup-pre-owned-car-market/amp">    
                                <div className = "press_imgContainer">
                                    <img src="https://images.squarespace-cdn.com/content/v1/564b6866e4b0c5929314d76f/1542059458363-DMWZVMBQVTIOM44WE6I1/What_is_your_story.jpg?format=1000w">
                                    </img>
                                </div>
                                <div className = "press_descContainer">
                                <p>How Royal Cars is re-defining the pre-owned car market through its platform</p>
                                </div>
                                </a> 
                            </div>
                        </div>
                        <div className = "press_carousel">
                            <div className = "carousel_left"></div>
                            <div className="carousel_right"></div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default MenuBar;