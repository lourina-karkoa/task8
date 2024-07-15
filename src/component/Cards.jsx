export default function Cards() {
    let card =[
        {h2:"Basic",pargraph:"for very small businessesand freelancers.",h22:"$2.5/mo",par:"",li:[`Disk Space:500 M.B`,`Bandwidth:500 G.B`,`SubDomains: Unlimited`,`Parked Domains: Unlimited`,`E-mail Accounts: Unlimited`,`Cpanel (control panel): Yes`,`Money Back Guarantee: 14 Days`],button:`You will have 1 Gift`}
        ,{h2:"Pro",pargraph:"for Individuals that need sharingvlogs or need huge portfolio.",h22:"$5/mo",par:"",li:[`Disk Space:3000 M.B`,`Bandwidth:3 TERA`,`SubDomains: Unlimited`,`Parked Domains: Unlimited`,`E-mail Accounts: Unlimited`,`Cpanel (control panel): Yes`,`Money Back Guarantee: 14 Days`],button:`1 Gift per/mo for year`},
        {h2:"Business",pargraph:"for Team that need sharingand reporting.",h22:"$8/mo",par:"5% discount during 2022",li:[`Disk Space:5000 M.B`,`Bandwidth:5 TERA`,`SubDomains: Unlimited`,`Parked Domains: Unlimited`,`E-mail Accounts: Unlimited`,`Cpanel (control panel): Yes`,`Money Back Guarantee: 14 Days`],button:`3 Gifts per/mo for year`},
        {h2:"Enterprise",pargraph:"for large companies that needadmins & security",h22:"$12/mo",par:"8% discount during 2022",li:[`Disk Space:10000 M.B`,`Bandwidth: 10 TERA`,`SubDomains: Unlimited`,`Parked Domains: Unlimited`,`E-mail Accounts: Unlimited`,`Cpanel (control panel): Yes`,`Money Back Guarantee: 14 Days`],button:`Just Call Us`}
    ]
 return(
        <>
        <section className="cards" id="Clients-Partners">
            <h2 className="card-h22">Hosting Pricing</h2>
            <div className="card-father">
                {card = card.map (element => {
                return( <div className="card-son">
                    <span className="card-span"></span>
                    <div className="card-son1">
                    <h4>{element.h2}</h4>
                    <p>{element.pargraph}</p>
                    <div className="adddiscount">
                      <h2>{element.h22}</h2>
                      <span className="discount">{element.par}</span>
                      </div>
                      <ul>
                        <li>{element.li[0]}</li>
                        <li>{element.li[1]}</li>
                        <li>{element.li[2]}</li>
                        <li>{element.li[3]}</li>
                        <li>{element.li[4]}</li>
                        <li>{element.li[5]}</li>
                        <li>{element.li[6]}</li>
                      </ul>
                      <button>{element.button}</button>
                      </div>
                </div>)})}
            </div>
            <p className="card-par">Support all the features of personal websites, corporate sites, news and commercial sites with 24 hours technical support.
Go Online, choose your plan and Contact us on:contact@focal-x.com | +963 935 033 139</p>









            </section>
        </>
    )}