import { readJSON, writeJSON } from 'https://deno.land/x/flat@0.0.10/mod.ts' 

// Read the downloaded_filename JSON
const requests = await readJSON('requests.json')
const offers = await readJSON('offers.json')

// Write a new JSON file with our filtered data
await writeJSON(Deno.env.get('POSTPROCESS_FILENAME'), { requests, offers }, { spaces: 2 })
console.log('Done.')
