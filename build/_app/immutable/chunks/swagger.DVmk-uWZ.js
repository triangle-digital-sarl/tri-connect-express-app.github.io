const e="3.0.1",t=[{url:"http://localhost:3000/api",description:"Local Server"}],r={version:"0.0.1",title:"@tri/api",description:"API Gateway",license:{name:"UNLICENSED"}},a={"/auth/login":{post:{tags:["Security"],parameters:[],requestBody:{content:{"application/json":{schema:{$ref:"#/components/schemas/CredType"}}},required:!0},responses:{201:{description:""}}}},"/auth/logout":{post:{tags:["Security"],parameters:[],responses:{201:{description:""}}}},"/auth/register":{post:{tags:["Security"],parameters:[],requestBody:{content:{"application/json":{schema:{$ref:"#/components/schemas/CredType"}}},required:!0},responses:{201:{description:""}}}},"/auth/callback":{get:{tags:["Security"],parameters:[{name:"code",in:"query",schema:{type:"string"},description:"",required:!0}],responses:{200:{description:""}}}},"/auth/profile":{get:{tags:["Security"],parameters:[],responses:{200:{description:"",content:{"application/json":{schema:{}}}}}}},"/trips":{get:{tags:["trips"],parameters:[{name:"query",in:"query",schema:{$ref:"#/components/schemas/QueryTripsFilter"},description:"",required:!0}],responses:{200:{description:"",content:{"application/json":{schema:{type:"array",items:{$ref:"#/components/schemas/GetTripDto"}}}}}}}},"/trips/{id}":{get:{tags:["trips"],parameters:[{name:"id",in:"path",schema:{type:"string"},description:"",required:!0}],responses:{200:{description:"",content:{"application/json":{schema:{$ref:"#/components/schemas/GetTripDto"}}}}}}},"/feature-flags":{get:{tags:["Features flag"],parameters:[],responses:{200:{description:"List of feature flags",content:{"application/json":{schema:{type:"array",items:{$ref:"#/components/schemas/FeatureFlagDto"}}}}}}}},"/bookings/payment-gateway":{post:{tags:["Booking"],parameters:[],requestBody:{content:{"application/json":{schema:{$ref:"#/components/schemas/CreatePaymentRequest"}}},required:!0},responses:{201:{description:""}}}},"/locations":{get:{tags:["Locations"],parameters:[],responses:{200:{description:"",content:{"application/json":{schema:{type:"array",items:{$ref:"#/components/schemas/GetLocationDto"}}}}}}}},"/locations/countries/{countryName}":{get:{tags:["Locations"],parameters:[{name:"countryName",in:"path",schema:{type:"string"},description:"",required:!0}],responses:{200:{description:"",content:{"application/json":{schema:{$ref:"#/components/schemas/CountryType"}}}}}}},"/locations/current-location/{lat}/{lng}":{get:{tags:["Locations"],parameters:[{name:"lat",in:"path",schema:{type:"string"},description:"",required:!0},{name:"lng",in:"path",schema:{type:"string"},description:"",required:!0}],responses:{200:{description:"",content:{"application/json":{schema:{$ref:"#/components/schemas/GetLocationDto"}}}}}}},"/schedules":{post:{tags:["Schedules"],parameters:[],responses:{201:{description:"newly create schedule",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{arrival_date:{type:"string"},arrival_time:{type:"string"},created_at:{type:"string"},departure_date:{type:"string"},departure_time:{type:"string"},duration:{type:"string"},id:{type:"number"},trip_id:{type:"number",nullable:!0},updated_at:{type:"string",nullable:!0}},nullable:!1,required:["arrival_date","arrival_time","departure_date","departure_time","duration"]}}}}}},summary:"Schedule new trips for given coming days",description:"Schedule new trips for given coming days."}}},s={schemas:{CredType:{type:"object",properties:{username:{type:"string"},password:{type:"string"}},nullable:!1,required:["username","password"]},QueryTripsFilter:{type:"object",properties:{departure_location_id:{type:"number"},arrival_location_id:{type:"number"},departure_time:{type:"string"},departure_date:{type:"string"},metas:{type:"array",items:{type:"string"}}},nullable:!1,required:["departure_location_id","arrival_location_id","departure_time","departure_date","metas"]},GetTripDto:{type:"object",properties:{id:{type:"number"},departure:{type:"object",properties:{time:{type:"string"},date:{type:"string"},location:{$ref:"#/components/schemas/LocationType"},quarter:{type:"string"}},nullable:!1,required:["time","date","location","quarter"]},arrival:{type:"object",properties:{time:{type:"string"},date:{type:"string"},location:{$ref:"#/components/schemas/LocationType"},quarter:{type:"string"}},nullable:!1,required:["time","date","location","quarter"]},duration:{type:"string"},price:{type:"string"},metas:{type:"array",items:{type:"string",enum:["WIFI","MEAL","USB","AIR_CONDITIONER","FIRST_CLASS","SECOND_CLASS","STANDARD_CLASS"]},nullable:!0},operator:{$ref:"#/components/schemas/Pick__typename"}},nullable:!1,required:["id","departure","arrival","duration","price","metas","operator"]},LocationType:{type:"object",properties:{id:{type:"number"},name:{type:"string"}},nullable:!1,required:["id","name"]},Pick__typename:{type:"object",properties:{name:{type:"string"}},nullable:!1,required:["name"],description:"From T, pick a set of properties whose keys are in the union K"},FeatureFlagDto:{type:"object",properties:{name:{type:"string"},value:{type:"boolean"},release_for_roles:{type:"array",items:{type:"string",enum:["PASSENGER","REGISTERED","ADMIN","SUPER_ADMIN"]},nullable:!0},release_for_users:{type:"array",items:{type:"number"},nullable:!0},release_for_countries:{type:"array",items:{type:"number"},nullable:!0},release_for_operators:{type:"array",items:{type:"number"},nullable:!0}},nullable:!1,required:["name","value","release_for_roles","release_for_users","release_for_countries","release_for_operators"]},CreatePaymentRequest:{type:"object",properties:{trip_id:{type:"number"},line:{type:"string"},metas:{type:"array",items:{type:"string"}},price:{type:"string"},operator:{type:"string"},departure:{type:"string"},arrival:{type:"string"},departure_time:{type:"string"},arrival_time:{type:"string"},payment_method:{type:"string"},payee_id:{type:"number"},passengers:{type:"array",items:{$ref:"#/components/schemas/Passenger"}},booking_id:{type:"string"},currency:{type:"string"}},nullable:!1,required:["trip_id","line","metas","price","operator","departure","arrival","departure_time","arrival_time","payment_method","payee_id","passengers","booking_id","currency"]},Passenger:{type:"object",properties:{id:{type:"number"},first_name:{type:"string"},last_name:{type:"string"},email:{type:"string"},location_id:{type:"number"},contacts:{type:"array",items:{type:"object",properties:{id:{type:"number"},type:{type:"string"},value:{type:"string"}},nullable:!1,required:["id","type","value"]}}},nullable:!1,required:["id","first_name","last_name","email","location_id","contacts"]},GetLocationDto:{type:"object",properties:{id:{type:"number"},name:{type:"string"},countryName:{type:"string"},abbreviations:{type:"array",items:{type:"string"},nullable:!0}},nullable:!1,required:["id","name","countryName","abbreviations"]},CountryType:{type:"object",properties:{name:{type:"string"},languages:{type:"array",items:{type:"string"},nullable:!0},currencies:{type:"array",items:{type:"string"},nullable:!0}},nullable:!1,required:["name","languages","currencies"]}}},i={openapi:e,servers:t,info:r,paths:a,components:s};export{s as components,i as default,r as info,e as openapi,a as paths,t as servers};