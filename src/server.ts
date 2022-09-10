import { Application, Router } from "https://deno.land/x/oak/mod.ts";

import { supabaseClient, supabaseTable, supabaseTableItems } from "https://deno.land/x/supabase_deno@v1.0.5/mod.ts";

import "https://deno.land/x/dotenv/load.ts";

const port = 22829;

/** get url print to console */

/** then pass url to supabase and get biz profile */

const sbclient = new supabaseClient(
  Deno.env.get("SUPABASE_API_URL"),
  Deno.env.get("SUPABASE_ANON_KEY")   
);



const router = new Router();
router.get("/", (ctx) => {
  console.log('******from router.get');

  console.log("24: ", ctx.request.headers.get("host"));

 const b2b_domain = ctx.request.headers.get("host");

  const sbTableItems = new supabaseTableItems(sbclient, "logos");

  const sbTableItem = sbTableItems.get('b2b_domain', b2b_domain); 
  
  console.log('aabi item: ', sbTableItem );
  
  sbTableItem
    .then(response => {
      console.log('from router.get');
      //console.log('37: ', response);
      const sbObject = response[0];
      const bizDom = response[0].b2b_domain;
      const bizUrl = response[0].url;
      ctx.response.body = `<!DOCTYPE html>
        <html>
          <head><title>Hello oak!</title><head>
          <body>

          <h1>Hello ${port} oak!</h1>     
            <p>${bizDom}</p>
            <p>${bizUrl}</p>   
          </body>
        </html>
      `;
    
    })


});

const app = new Application();


app.use(async (ctx, next) => {

  await next();

  console.log("43: from app.use", ctx.request.headers.get("host"));
 // ctx.response.body = "Hello World!";



 const b2b_domain = ctx.request.headers.get("host");

 const sbTableItems = new supabaseTableItems(sbclient, "logos");

 const sbTableItem =  await sbTableItems.get('b2b_domain', b2b_domain); 
 
 console.log('aabi item: ', sbTableItem );
});


app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port });