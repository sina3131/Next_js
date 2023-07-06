import { g, auth, config } from '@grafbase/sdk'

//g is schema generator, config the final object to return

const User = g.model('User', {
  name: g.string().length({ min: 2, max: 20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(),
  projects: g.relation(() => Project).list().optional(),
  // Here we say that user can have multipule projects that's why 
  // we use list and because in the start there is no project
  // it's optional
})

const Project = g.model('Project' , {
  title: g.string().length({min: 3}),
  description: g.string(),
  image:g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBY: g.relation(() => User),
  // the last one means that the post or project is created
  // by User

  

})




export default config({
  schema: g

})
