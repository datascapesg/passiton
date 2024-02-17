import { readJSON } from 'https://deno.land/x/flat@0.0.15/mod.ts' 

// Read the downloaded_filename JSON
const requests = await readJSON('requests.json')
const offers = await readJSON('offers.json')

// Write a new JSON file with our filtered data
const jsonString = JSON.stringify({ requests, offers }, null, 2)

Deno.writeTextFileSync(Deno.env.get('POSTPROCESS_FILENAME'), jsonString)
    
console.log('Done.')
