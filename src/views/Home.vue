<template>
  <div class="home my-5">
    <div class="jumbotron vertical-center bg-transparent">
      
    <div class="header-box py-4">
      <div class="row text-light">
        <div class="col-12 col-md-8">
          <h1>  <b> The knowledge of drug to drug interactions, all in one place.  </b></h1>
        </div>
      </div>

      <div class="row pb-2 text-light">
        <div class="col-12 col-md-8">
          <h5>
            Whenever two or more drugs are being taken, there is a greater chance that 
            there will be an interaction among the drugs. Drug to drug interaction may 
            decrease how well your medications work, increase the side effects, 
            or even increase the blood level and possible toxicity.
          </h5>
        </div>
      </div>
    </div>

    <div class="header-search-box row pt-3">
      <div class="col-md-6 ml-auto  bg-dark text-light rounded">
        <h5 class="header-search-box-title pt-4 py-3">
          <b>
          Let's start with searching for your first drug
          </b>
        </h5>
        <div class="header-search-box-field pb-4">
          <h2>
            <div class="input-group mb-3">
              <input type="text" v-model="drugsearch" @keyup.enter ="matchedDrug" class="form-control" placeholder="Cocaine">
                <div class="input-group-append">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-search ml-3 mr-5 mt-1" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>   
                </div>
            </div>
          </h2>
        </div>
      </div>
    </div>
    </div>

    <br>

    <div class="jumbotron vertical-center " style="background-color:#122496">

    <div class="disaster-notification-body py-5 ">
      <div class="row text-light pt-5 pb-2">
        <div class="col-12 col-md-6 pt-5">
          <h1><b>Stay connected with the ones you trust</b></h1>
        </div>
      </div>
      
    <div class="row pb-2 text-light">
        <div class="col-12 col-md-8">
          <h5>
            D2D provides users with the ability to build trust and confidence with the individuals they trust most. The reliability, secuirty and well being of the users always come first whenever they use our service.
          </h5>
        </div>
                 <svg xmlns="http://www.w3.org/2000/svg" width="350" height="350" fill="currentColor" class="bi bi-phone-vibrate" viewBox="0 0 16 16">
              <path d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6z"/>
              <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1.599 4.058a.5.5 0 0 1 .208.676A6.967 6.967 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A7.968 7.968 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208zm12.802 0a.5.5 0 0 1 .676.208A7.967 7.967 0 0 1 16 8a7.967 7.967 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A6.967 6.967 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676zM3.057 5.534a.5.5 0 0 1 .284.648A4.986 4.986 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A5.986 5.986 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284zm9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8c0 .769-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8c0-.642-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648z"/>
            </svg>
      </div>
    </div>


    </div>

  </div>
  

</template>

<script>


export default {
  name: "Home",
  components: {
  },
  methods: {
    matchedDrug(){
      this.drugtype.forEach(drug => {
        if(this.drugsearch.toLowerCase().trim() == drug.name){
          this.$router.push({ name: 'Drugs', params: {rxcui: drug.rxcui}})
        }

      })
    }
  },
  data() {
    return {
      drugsearch: '',
      drugtype: [{ 
        name: 'cocaine',
         rxcui: 2653
        },{ 
          name: 'fentanyl', 
          rxcui: 4337
        },{
          name: 'heroin', 
          rxcui: 3304}
      ]
    }
  },
};
</script>
