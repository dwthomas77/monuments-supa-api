





// try {
//   supabase = createClient(supabaseUrl, supabaseKey);
//   const { data, error } = await supabase
//   .from('Monuments')
//   .select('*');
//   console.log("did it work?");
//   if (error) {
//     throw new Error('Failed to fetch characters', { cause: error });
//   }
//   console.log(data);
// } catch (err) {
//   throw new Error('Failed to create Supabase client', { cause: err });
// }

process.stdin.resume();