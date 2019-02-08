import * as contentful from 'contentful';
  
const client = contentful.createClient({
  space: 'g0l7uav882oc',
  accessToken: '4215982da63c13e8d6a98f4137041d176a1f7c97504329876ca2423b010b480b' })
client.getEntries().then(entries => {
  entries.items.forEach(entry => {
    if(entry.fields) {
      const openingText = entry.fields.openingText;
      const bodyText = entry.fields.bodyText;
    }
  })
})

export default client;