
describe('Navegacion', ()=>{

    it('Navegando a nuestra primer pagina', ()=>{
        cy.visit('https://platzi.com/')
    })
    
    it('Recargar pagina', ()=>{
        cy.reload()
    })
    
    it('Recargar pagina de forma forzada', ()=>{
        cy.visit('https://google.com/')
        cy.reload(true)
    })

    it.only('Navegar hacia atras', ()=>{
        cy.visit('https://google.com/')
        cy.visit('https://www.google.com/search?q=platzi&sxsrf=AJOqlzUSFTah0R2vLOG6-NFBe0BhhUU1Ag%3A1676067041027&ei=4cDmY_6qAbKMwbkPpZ2siAI&oq=plat&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgQIIxAnMiAILhCABBCxAxCDARDHARDRAxCoAxDSAxCLAxDSAxCoAzILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMggIABCxAxCDATIFCAAQgAQyGgguEIAEELEDEIMBEJoDEKgDEIsDEKgDEJoDMgUIABCABDIFCAAQgAQyCAgAEIAEELEDOgoIABBHENYEELADOgcIIxCxAhAnOiIILhCABBCxAxCDARDHARDRAxCoAxDSAxAKEIsDEKgDENIDOgcIABCABBAKOicILhCABBCxAxCDARDHARDRAxCoAxDSAxAKEIsDENwEEN4EEOAEGAE6BwgjEOoCECc6DQguEKgDEJoDEOoCECc6GQguEMcBENEDEKgDENIDEEMQiwMQqAMQ0gM6IAguEIAEELEDEIMBEMcBENEDEKgDENIDEIsDEKgDENIDOh4ILhDHARDRAxCoAxDSAxBDEIsDENwEEN4EEOAEGAE6IAguEIAEELEDEIMBEMcBENEDENIDEKgDEIsDENIDEKgDOgsILhCABBCdAxCoAzoLCC4QgAQQqAMQnQM6JQguEIAEELEDEIMBEMcBENEDEKgDENIDEIsDENwEEN4EEOAEGAFKBAhBGABKBAhGGAFQhQdY3h5gvzBoAnABeASAAbMBiAHRCZIBAzEuOJgBAKABAbABCsgBCLgBA8ABAdoBBggBEAEYFA&sclient=gws-wiz-serp')
        cy.go('back')
        cy.go('forward')
    })

})