const name = "Murat"
const isLoggedIn = true

function Header(){
    return (
        <div>
            <h1>{isLoggedIn ? `Benim adım: ${name}` : `Giriş Yapmadınız` }</h1>
        </div>
    )
}

export default Header