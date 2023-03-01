const loaders = () =>{
fetch("https://api.alquran.cloud/v1/surah")
.then(res => res.json())
.then(data => dataRetrive(data))
}


const SurahContainer = document.getElementById('surah__container');
const dataRetrive = ({data} = quran) => {
   // console.log(data)
   dataFindForverses(data)
   data.map(Surah => {
     const {number,name,englishName,englishNameTranslation,numberOfAyahs,revelationType} = Surah;
      // console.log(number, name, numberOfAyahs, revelationType,englishName);
      const SurahDiv = document.createElement('div');
      SurahDiv.classList.add('card');
      SurahDiv.classList.add('card-compact');
      SurahDiv.classList.add('w-96');
      SurahDiv.classList.add('bg-base-100');
      SurahDiv.classList.add('shadow-xl');
      SurahDiv.innerHTML = `
               <div class="card-body">
                    <h1 class="card-title">No. <span>${number}</span> Name: ${name} </h1>
                    <h3>English Name: ${englishName} </h3>
                    <p>English English Name Translation: ${englishNameTranslation} </p>
                    <p>Number Of Ayahs: ${numberOfAyahs} <span class="text-purple-700">Landing place: ${revelationType} </span></p>
                    <div class="card-actions justify-end">
                        <label for="my-modal-6" class=" btn btn-primary hover:bg-cyan-300 hover:text-yellow-500">Read More</label>
                        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                           <div class="modal-box">
                              <h3 class="font-bold text-lg">Congratulations for your searching</h3>
                              <p class="py-4">Coming Soon .............</p>
                              <div class="modal-action">
                                    <label for="my-modal-6" class="btn btn-outline">Close</label>
                              </div>
                           </div>
                        </div>
                     </div>
               </div>
      `;
      SurahContainer.appendChild(SurahDiv);  
   })
}

const dataFindForverses = (verses) =>{
   // console.log(verses)
}







loaders();