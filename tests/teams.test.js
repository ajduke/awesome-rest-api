import supertest from 'supertest'
import app from '../index'

// using the supertest for api level testing
const request = supertest(app)

const mumbaiTeam =  {"name": "Mumbai","img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/632.jpg"}

describe('Teams api', ()=>{
  test('should get data of all teams', (done)=>{
     request
       .get('/teams/')
       .then((resp)=>{
         const {body, statusCode} = resp
         expect(statusCode).toBe(200)
         expect(body).toBeTruthy()
         expect(Array.isArray(body)).toBe(true)
         done()
       })
      
  })
  
  test('should get data for Arsenal team', (done)=>{
     request
       .get('/teams/Arsenal')
       .then((resp)=>{
         const {body, statusCode} = resp
         const arsenalObj = {"name": "Arsenal","img": "https://s3-eu-west-1.amazonaws.com/inconbucket/images/entities/original/632.jpg"}
         expect(statusCode).toBe(200)
         expect(body).toBeTruthy()
         expect(typeof body).toBe('object')
         expect(body).toEqual(arsenalObj)
         done()
       })
  })
  
  test('should create the new Mumbai team', (done)=>{
    request
      .post('/teams')
      .send(mumbaiTeam)
      .then((resp)=>{
        const {body, statusCode} = resp
        expect(statusCode).toBe(200)
        done()
      })
  })
  
   test('should contains the Mumbai Team object', (done)=>{
     request
       .get('/teams/Mumbai')
       .then((resp)=>{
         const {body, statusCode} = resp
         expect(statusCode).toBe(200)
         expect(body).toBeTruthy()
         expect(typeof body).toBe('object')
         expect(body).toEqual(mumbaiTeam)
         done()
       })
  })
})