import styled from 'styled-components'




export const Sobre = styled.section`
width: 100%;
background-color: var(--cor-primaria-clara);
padding: 100px 0 ;
@media screen and (max-width: 900px){
    padding: 50px 0 ;
}

`

export const Container = styled.div`
width: 80%;
margin: auto ;
display: flex ;

@media screen and (max-width: 1000px){
    width: 90%;
    flex-direction: column ; 
    justify-content: space-between;
    align-items: center ;
}
`

export const Info = styled.div`
width: 60% ;
/* border: 6px solid var(--cor-terciaria); */
border-radius: 15px 60px ;
padding: 30px ;
box-shadow: 10px 10px 15px var(--cor-primaria) ;

@media screen and (max-width: 1000px){
    width: 95% ;
    margin: 20px;
}
img{
    width: 150px ;
    border-radius: 50% ;
    margin-bottom: -20px ;
    margin-left: 20px ;
    box-shadow: 10px 10px 15px var(--cor-primaria) ;
}
h2{
    color: var(--branco) ;
    font-size: 60px ;
    display: inline-block;
    span{
        color: var(--cor-secundaria) ;

    }

    @media screen and (max-width: 1145px){
        font-size: 45px ;
    }

    @media screen and (max-width: 523px){
        font-size: 30px ;
    }
}
h2::before{
    content:'{';
    color: var(--cor-terciaria) ;
    font-size: 80px ;

    @media screen and (max-width: 523px){
        font-size: 40px ;
    }
}
h2::after{
    content:'}';
    color: var(--cor-terciaria) ;
    font-size: 80px ;

    @media screen and (max-width: 523px){
        font-size: 40px ;
    }
}
p{
    color: var(--branco);
    margin-bottom: 10px ;
    margin-top: 10px;

    strong{
        color: var(--cor-secundaria);

    }
}


`

export const Skills = styled.div`
width: 40%;
display: flex ;
flex-direction: column;
justify-content: center ;
align-items: center;

@media screen and (max-width: 1000px){
    width: 90%;
}
.title{
    width: 100% ;
    h2{ 
        text-transform:uppercase;
        color: var(--branco) ;
        font-size: 60px ;
        text-align: center;
        span{
            color: var(--cor-terciaria) ;

        }
        
    }

    h2::before{ 
        content: '=>' ;
        color: var(--cor-terciaria) ;
        font-size: 50px ;
       
        
    }

}

.skills{
    width: 80% ;
    display: flex ;
    flex-wrap: wrap ;
    justify-content: center ;
    align-items: center;

    @media screen and (max-width: 1000px){
    width: 95% ;
    margin: 20px;
    }
    
    .html{
        width: 140px ;
        padding:20px 0;
        margin-bottom: 20px ;
        box-shadow: 10px 10px 15px var(--cor-primaria) ;
        display: flex ;
        flex-direction: column ;
        justify-content: center ;
        align-items: center ;
        
        img{
            width: 100px ;
        }
        h3{
            text-align: center ;
            color: var(--branco);
        }
    }

    
    .css{
        width: 140px ;
        padding:20px 0;
        margin-bottom: 20px ;
        box-shadow: 10px 10px 15px var(--cor-primaria) ;
        display: flex ;
        flex-direction: column ;
        justify-content: center ;
        align-items: center ;
        img{
            width: 100px ;
        }
        h3{
            text-align: center ;
            color: var(--branco);
        }
    }

    .javascript{
        width: 140px ;
        padding:20px 0;
        margin-bottom: 20px ;
        box-shadow: 10px 10px 15px var(--cor-primaria) ;
        display: flex ;
        flex-direction: column ;
        justify-content: center ;
        align-items: center ;
        img{
            width: 100px ;
        }
        h3{
            text-align: center ;
            color: var(--branco);
        }
    }

    .react{
        width: 140px ;
        padding:20px 0;
        margin-bottom: 20px ;
        box-shadow: 10px 10px 15px var(--cor-primaria) ;
        display: flex ;
        flex-direction: column ;
        justify-content: center ;
        align-items: center ;
        img{
            width: 100px ;
        }
        h3{
            text-align: center ;
            color: var(--branco);
        }
    }
}

`