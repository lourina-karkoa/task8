import orang from '../assets/images/pp.png'
import parpr from '../assets/images/oo.png'

export const data =[
    {id:'1',h3:'Branding',p:`It is also the source of inspiration for everything you do when youdeal with your customers and that is the important and emotionalthing.Your Brand and Visual identity represents an intrinsic Valueto your company.`,
    h4:'In focal X agency, we provide:',serv:`Visual identity design.Define Brand Identity.Define Brand personality.Building Your brand strategy.Market research and competitors study.`,titlee:'We walk with you from A to Z'}
    ,{id:'2',h3:'Marketing',p:` Talk to your customers and tell them you and your company's story through us the way you want.Let us plan the content that will bring your audience closer to you`
        ,h4:'In our marketing agency, we provide:',serv:`E-mail marketing.Affiliate marketing.Influencer marketing.Copy & content writingMarket research and Analysis.App store optimization ( ASO ).Search engine Marketing ( SEM ).Search engine optimization ( SEO ).Social media marketing & campaigns.`}
]
export default function Servise() {
    return(
        <>
        <section className='father-serv' id="Services">
        <h2>Our Services</h2>
        <div className='services'>
          
            <div className="service-baba addtion1">
                <div className="serv-son1">
                    <h3 className='serv-son1-h3'>Branding</h3>
                    <p className='serv-son1-par1'>It is also the source of inspiration for everything you do when you
                       deal with your customers and that is the important and emotional
                      thing.Your Brand and Visual identity represents an intrinsic Value
                       to your company.</p>
                </div>
                <div className='serv-add'>
                <div className='serv-son2'> 
                    <div className="serv-son1">
                        <h4 className='serv-son1-h4'>In focal X agency, we provide:</h4>
                        <ul className='serv-son1-par11'><li>Visual identity design.</li>
                         <li>  Define Brand Identity.</li>
                         <li>  Define Brand personality.</li>
                         <li>   Building Your brand strategy.</li>
                          <li> Market research and competitors study.</li>
                          </ul>
                        <h4 className='serv-h4'>We walk with you from A to Z.</h4>
                    </div>
                    <img className='serv-imag'  src={orang}/>
                </div>
                </div>
            </div>
            <div className="service-baba addtion2">
                <div className="serv-son1">
                    <h3 className='serv-h3'>Marketing</h3>
                    <p className='serv-son1-par12'>
                      Talk to your customers and tell them  
                      you and your company's 
                      story through us the way you want.
                      Let us plan the content that will bring your audience closer to you</p>
                </div>
                <div className='serv-son2'> 
                    <div className="serv-son1">
                        <h4 className='serv-son1-h4'>In our marketing agency, we provide:</h4>
                        <ul className='serv-son1-par11'>
                         <li> E-mail marketing.</li>
                         <li>Affiliate marketing.</li>
                         <li>Influencer marketing.</li>
                         <li>Copy & content writing</li>
                          <li>Market research and Analysis.</li>
                          <li>App store optimization ( ASO ).</li>
                          <li>Search engine Marketing ( SEM ).</li>
                          <li>Search engine optimization ( SEO ).</li>
                          <li>Social media marketing & campaigns.</li>
                          </ul>
                    </div>
                    <img className='serv-imag2'  src={parpr}/>
                </div>
            </div>














        </div>
        <div>
            {data.map(item =>{
                return(
                    <div key={item.id}>
                        <h3>{item.h3}</h3>
                        <p>{item.p}</p>
                        <h3>{item.h4}</h3>
                        <p>{item.serv}</p>
                    </div>
                )
            })}
        </div>
        
        
        
        
        
        
        
        
        
        </section>
        </>
    )}