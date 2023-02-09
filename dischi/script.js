console.log('Vue js', Vue);

const {createApp} = Vue; 
const apiUri = 'http://localhost/esercizi/php-dischi-json/dischi/index.php';

const app = createApp({
    data(){
        return{ 
           discs: []   
        }
    }, 

    created() {
        axios.get(apiUri).then(res => {
            this.discs = res.data;
        })
    }

});

app.mount('#root');
