import './Page.css'
import house from "../Page/house.svg"
import building from "../Page/building.svg"
import cart from "../Page/cart.svg"
import book from "../Page/open-book.png"
import triangle from "../Page/triangle.jpg"
import kite from "../Page/kite.png"
import woman from "../Page/blackwoman.jpeg"
function Play() {
    return(
        <div>
            <div className='yellow-nav'>
            Promo 📣:  Get an Expert Tutor for just $1 today -  
            <a href='https://phenom.ng/findtutor'> <span style={{textDecoration:'underline', fontWeight:'450'}} className='click-link'> Click here to get started!</span> </a>
            <span>👈🏻</span>
            </div>
            <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Phenom</div>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        
                        <a href="https://phenom.ng" style={{color:'black', fontWeight:'normal'}}><li className='lis'><img src={house} alt="" className='house'/>Home</li></a>
                      
                        <a href="https://phenom.ng/connect" style={{color:'black', fontWeight:'normal'}}><li className='lis'><img src={building} alt="" className='building'/>Connect</li></a>
                        
                        <a href='https://phenom.ng/bookstore' style={{color:'black', fontWeight:'normal'}}><li className='lis'><img src={book} alt="" className='book'/>Store</li></a>
                        
                        <img src={cart} alt="" className='cart'/><span style={{color:'red'}} className='span'>0</span>
      
                    </ul>
                </div>
            </div>
        </div>
        <div className='body'>
            <div className='div-kite'><img src={kite} alt="" className='kite'/></div>
            <h1 className='phenom'>Phenom<br/>Connect</h1>
            <p className='p-text'>Unlock 10% off your child's education! Apply now with<br/> Phenom Connect and find their perfect school. Don't miss<br/>   out, enroll today!</p>
            <form action="">
            <div className="div-triangle"><img src={triangle} alt="" className='triangle'/></div>

                <h4 className='state'>State</h4>
                <select name id required className='select'>
                    <option value="">select state</option>
                <option value="">Abia</option>
                <option value="">Adamawa</option>
                <option value="">Anambra</option>
                <option value="">Akwa Ibom</option>
                <option value="">Bauchi</option>
                <option value="">Bayelsa</option>
                <option value="">Benue</option>
                <option value="">Borno</option>
                <option value="">Cross River</option>
                <option value="">Delta</option>
                <option value="">Ebonyi</option><option value="Enugu">Enugu</option>
                <option value="">Edo</option>
                <option value="">Ekiti</option>
                <option value="">Gombe</option>
                <option value="">Imo</option>
                <option value="">Jigawa</option>
                <option value="">Kaduna</option>
                <option value="">Kano</option>
                <option value="">Katsina</option>
                <option value="">Kebbi</option>
                <option value="">Kogi</option>
                <option value="">Kwara</option>
                <option value="s">Lagos</option>
                <option value="">Nasarawa</option>
                <option value="">Niger</option>
                <option value="">Ogun</option>
                <option value="">Ondo</option>
                <option value="">Osun</option>
                <option value="">Oyo</option>
                <option value="">Plateau</option>
                <option value="">Rivers</option>
                <option value="">Sokoto</option>
                <option value="">Taraba</option>
                <option value="">Yobe</option>
                <option value="">Zamfara</option>
                <option value="">FCT</option>
                </select>

                <h4 className='state3'>L.G.A</h4>
                <select name id required className='select'>
                    <option value="">select L.G.A</option>
                    <option value="">Aba North</option>
                    <option value="">Aba South</option>
                    <option value="">Arochukwu</option>
                    <option value="">Bende</option>
                    <option value="">Isiala Ngwa South</option>
                    <option value="">Ikwuano</option>
                    <option value="">Isiala</option>
                    <option value="">Ngwa North</option>
                    <option value="">Isukwuato</option>
                    <option value="">Ukwa West</option>
                    <option value="">Ukwa East</option>
                    <option value="">Umuahia</option>
                    <option value="">Umuahia South</option>
                    <option value="">Demsa</option>
                    <option value="">Fufore</option>
                    <option value="">Ganye</option>
                    <option value="">Girei</option>
                    <option value="">Gombi</option>
                    <option value="">Jada</option>
                    <option value="">Yola North</option>
                    <option value="">Lamurde</option>
                    <option value="">Madagali</option>
                    <option value="">Maiha</option>
                    <option value="">Mayo-Belwa</option>
                    <option value="">Michika</option>
                    <option value="">Mubi South</option>
                    <option value="">Numna</option>
                    <option value="">Shelleng</option>
                    <option value="">Song</option>
                    <option value="">Toungo</option>
                    <option value="">Jimeta</option>
                    <option value="">Yola South</option>
                    <option value="">Hung</option>
                    <option value="">Aguata</option>
                    <option value="">Anambra</option>
                    <option value="">Anambra West</option>
                    <option value="">Anaocha</option>       
                    <option value="">Awka South</option>
                    <option value="">Awka North</option>
                    <option value="">Ogbaru</option>
                    <option value="">Onitsha South</option>
                    <option value="">Onitsha North</option>
                    <option value="">Orumba North</option>
                    <option value="">Orumba South</option>
                    <option value="">Oyi</option>
                    <option value="">Abak</option>
                    <option value="">Eastern Obolo</option>
                    <option value="">Eket</option>
                    <option value="">Essien Udim</option>
                    <option value="">Etimekpo</option>
                    <option value="">Etinan</option>
                    <option value="">Ibeno</option>
                    <option value="">Ibesikpo Asutan</option>
                    <option value="">Ibiono Ibom</option>
                    <option value="">Ika</option>
                    <option value="">Ikono</option>
                    <option value="">Ikot Abasi</option>
                    <option value="">Ikot Ekpene</option>
                    <option value="">Ini</option>
                    <option value="">Itu</option>
                    <option value="">Mbo</option>
                    <option value="">Mkpat Enin</option>
                    <option value="">Nsit Ibom</option>
                    <option value="">Nsit Ubium</option>
                    <option value="">Obot Akara</option>
                    <option value="">Okobo</option>
                    <option value="">Onna</option>
                    <option value="">Orukanam</option>
                    <option value="">Oron</option>
                    <option value="">Udung Uko</option>
                    <option value="">Ukanafun</option>
                    <option value="">Esit Eket</option>
                    <option value="">Uruan</option>
                    <option value="">Urue Offoung</option>
                    <option value="">Oruko Ete</option>
                    <option value="">Uyo</option>
                    <option value="">Alkekeri</option>
                    <option value="">Bauchi</option>
                    <option value="">Bogoro</option>
                    <option value="">Darazo</option>
                    <option value="">Dass</option>
                    <option value="">Gamawa</option>
                    <option value="">Ganjuwa</option>
                    <option value="">Giade</option>
                    <option value="">Jama'are</option>
                    <option value="">Katagum</option>
                    <option value="">Kirfi</option>
                    <option value="">Misau</option>
                    <option value="">Ningi</option>
                    <option value="">Hira</option>
                    <option value="">Tafawa Balewa</option>
                    <option value="">Itas Gadau</option>
                    <option value="">Toro</option>
                    <option value="">Warji</option>
                    <option value="">Zaki</option>
                    <option value="">Dambam</option>
                    <option value="">Brass</option>
                    <option value="">Ekeremor</option>
                    <option value="">Kolok/Opokuma</option>
                    <option value="">Nembe</option>
                    <option value="">Ogbia</option>
                    <option value="">Sagbama</option>
                    <option value="">Southern Ijaw</option>
                    <option value="">Yenagoa</option>
                    <option value="">Membe</option>
                    <option value="">Ador</option>
                    <option value="">Agatu</option>
                    <option value="">Apa</option>
                    <option value="">Buruku</option>
                    <option value="">Gboko</option>
                    <option value="">Guma</option>
                    <option value="">Gwer East</option>
                    <option value="">Gwer West</option>
                    <option value="">Katsina</option>
                    <option value="">Ala</option>
                    <option value="">Konshisha</option>
                    <option value="">Kwande</option>
                    <option value="">Logo</option>
                    <option value="">Makurdi</option>
                    <option value="">Obi</option>
                    <option value="">Ogbadibo</option>
                    <option value="">Ohimini</option>
                    <option value="">Oju</option>
                    <option value="">Okpokwu</option>
                    <option value="">Oturkpo</option>
                    <option value="">Tarka</option>
                    <option value="">Ukum</option>
                    <option value="">Vandekya</option>
                    <option value="">Abadan</option>
                    <option value="">Askira/Uba</option>
                    <option value="">Bama</option>
                    <option value="">Bayo</option>
                    <option value="">Biu</option>
                    <option value="">Chibok</option>
                    <option value="">Damboa</option>
                    <option value="">Dikwagubio</option>
                    <option value="">Guzamala</option>
                    <option value="">Gwoza</option>
                    <option value="">Hawul</option>
                    <option value="">Jere</option>
                    <option value="">Kaga</option>
                    <option value="">Kalka/Balge</option>
                    <option value="">Konduga</option>
                    <option value="">Kukawa</option>
                    <option value="">Kwaya-ku</option>
                    <option value="">Mafa</option>
                    <option value="">Magumeri</option>
                    <option value="">Maiduguri</option>
                    <option value="">Marte</option>
                    <option value="">Mobbar</option>
                    <option value="">Monguno</option>
                    <option value="">Ngala</option>
                    <option value="">Nganzai</option>
                    <option value="">Shani</option>
                    <option value="">Abia</option>
                    <option value="">Akampa</option>
                    <option value="">Akpabuyo</option>
                    <option value="">Bakassi</option>
                    <option value="">Bekwara</option>
                    <option value="">Biase</option>
                    <option value="">Boki</option>
                    <option value="">Clalabar South</option>
                    <option value="">Etung</option>
                    <option value="">Ikom</option>
                    <option value="">Obanliku</option>
                    <option value="">Obubra</option>
                    <option value="">Obudu</option>
                    <option value="">Odukpani</option>
                    <option value="">Ogoja</option>
                    <option value="">Ugep North</option>
                    <option value="">Yala</option>
                    <option value="">Yarkur</option>
                    <option value="">Aniocha South</option>
                    <option value="">Anioha</option>
                    <option value="">Bomadi</option>
                    <option value="">Burutu</option>
                    <option value="">Ethiope West</option>
                    <option value="">Ethipe East</option>
                    <option value="">Ika South</option>
                    <option value="">Ika North East</option>
                    <option value="">Isoko South</option>
                    <option value="">Isoko North</option>
                    <option value="">Ndokwa East</option>
                    <option value="">Ndokwa West</option>
                    <option value="">Okpe</option>
                    <option value="">Oshimili North</option>
                    <option value="">Oshimili South</option>
                    <option value="">Patani</option>
                    <option value="">Sapele</option>
                    <option value="">Udu</option>
                    <option value="">Ughelli South</option>
                    <option value="">Ughelli North</option>
                    <option value="">Ukwuani</option>
                    <option value="">Uvuwie</option>
                    <option value="">Warri Central</option>
                    <option value="">Warri North</option>
                    <option value="">Warri South</option>
                    <option value="">Abakaliki</option>
                    <option value="">Afikpo South</option>
                    <option value="">Afikpo North</option>
                    <option value="">Ebonyi</option>
                    <option value="">Ezza</option>
                    <option value="">Ezza South</option>
                    <option value="">Ikwo</option>
                    <option value="">Ishielu</option>
                    <option value="">Ivo</option>
                    <option value="">Ohaozara</option>
                    <option value="">Ohaukwu</option>
                    <option value="">Onicha</option>
                    <option value="">Izzi</option>
                    <option value="">Akoko-Edo</option>
                    <option value="">Egor</option>
                    <option value="">Essann East</option>
                    <option value="">Essann South East</option>
                    <option value="">Essann Central</option>
                    <option value="">Essann West</option>
                    <option value="">Etsako Central</option>
                    <option value="">Etsako East</option>
                    <option value="">Etsako</option>
                    <option value="">Orhionwon</option>
                    <option value="">Ovia North</option>
                    <option value="">Ovia South West</option>
                    <option value="">Owan West</option>
                    <option value="">Owan South</option>
                    <option value="">Uhunwonde</option>
                    <option value="">Ado Ekiti</option>
                    <option value="">Effon Alaiye</option>
                    <option value="">Ekiti South West</option>
                    <option value="">Ekiti West</option>
                    <option value="">Ekiti East</option>
                    <option value="">Emure/ise</option>
                    <option value="">Orun</option>
                    <option value="">Ido</option>
                    <option value="">Osi</option>
                    <option value="">Ijero</option>
                    <option value="">Ikere</option>
                    <option value="">Ikole</option>
                    <option value="">Ilejemeje</option>
                    <option value="">Irepodun</option>
                    <option value="">Ise/Orun</option>
                    <option value="">Moba</option>
                    <option value="">Oye</option>
                    <option value="">Aiyekire</option>
                    <option value="">Awgu</option>
                    <option value="">Aninri</option>
                    <option value="">Enugu East</option>
                    <option value="">Enugu South</option>
                    <option value="">Enugu North</option>
                    <option value="">Ezeagu</option>
                    <option value="">Igbo Eze North</option>
                    <option value="">Igbi Etiti</option>
                    <option value="">Nsukka</option>
                    <option value="">Oji River</option>
                    <option value="">Undenu</option>
                    <option value="">Uzo Uwani</option>
                    <option value="">Udi</option>
                    <option value="">Akko</option>
                    <option value="">Balanga</option>
                    <option value="">Billiri</option>
                    <option value="">Dukku</option>
                    <option value="">Dunakaye</option>
                    <option value="">Gombe</option>
                    <option value="">Kaltungo</option>
                    <option value="">Kwami</option>
                    <option value="">Nafada/Bajoga</option>
                    <option value="">Shomgom</option>
                    <option value="">Yamaltu/Deba</option>
                    <option value="">Aboh-mbaise</option>
                    <option value="">Ahiazu-mbaise</option>
                    <option value="">Ehime-mbaino</option>
                    <option value="">Ezinhite</option>
                    <option value="">Ideato North</option>
                    <option value="">Ideato South</option>
                    <option value="">Ihitte/Uboma</option>
                    <option value="">Ikeduru</option>
                    <option value="">Isiala</option>
                    <option value="">Isu</option>
                    <option value="">Mbaitoli</option>
                    <option value="">Ngor Okpala</option>
                    <option value="">Njaba</option>
                    <option value="">Nwangele</option>
                    <option value="">Nkwere</option>
                    <option value="">Obowo</option>
                    <option value="">Aguta</option>
                    <option value="">Ohaji Egbama</option>
                    <option value="">Okigwe</option>
                    <option value="">Onuimo</option>
                    <option value="">Orlu</option>
                    <option value="">Orsu</option>
                    <option value="">Oru West</option>
                    <option value="">Oru</option>
                    <option value="">Owerri</option>
                    <option value="">Owerri North</option>
                    <option value="">Owerri South</option>
                    <option value="">Auyo</option>
                    <option value="">Babura</option>
                    <option value="">Birnin-Kudu</option>
                    <option value="">Birniwa</option>
                    <option value="">Buji</option>
                    <option value="">Dute</option>
                    <option value="">Garki</option>
                    <option value="">Gagarawa</option>
                    </select>
                    <h4 className='state2'>Residential Adress</h4>
                    <input type="text" placeholder='' className='select'/>
                    <br/>
                    <button className='search-button'>Search</button>
            </form>
            </div>

            <div className='shapes'>
                <div className='circle'></div>
            </div>

            <div className='power'>
                <img src={woman} alt="" className='pic'/>
            </div>
            </div>
    )
}

export default Play