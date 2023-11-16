import { useSearchParams } from 'next/navigation'
import Bubble from "../../../components/Bubble";
import Image from "next/legacy/image";

export function Breed2({ json, image, otherImages }) {

  // have to check if unique and url doesn't match image.url 
  let otherImagesUrls = otherImages.map(other => other.url);

  let filtered = otherImagesUrls.filter(x => x !== image.url);

  otherImagesUrls = Array.from(new Set(filtered));

  return (
    <main>
      <div className={styles.topGrid}>
        <div>
          {image.url && <Image src={image.url} alt="" width="400" height="400" className={styles.radius} priority />}
        </div>
        <section>
          <h1>{json[0].name}</h1>
          <p className={styles.description}>{json[0].description}</p>
          <h2>Termperament: {json[0].temperament}</h2>
          <h2>Origin: {json[0].origin}</h2>
          <h2>Life Span: {json[0].life_span} years</h2>
          <h2 className={styles.bubbleGrid}>Adaptability: <Bubble count={json[0].adaptability} /></h2>
          <h2 className={styles.bubbleGrid}>Affection Level: <Bubble count={json[0].affection_level} /></h2>
          <h2 className={styles.bubbleGrid}>Child Friendly: <Bubble count={json[0].child_friendly} /></h2>
          <h2 className={styles.bubbleGrid}>Grooming: <Bubble count={json[0].grooming} /></h2>
          <h2 className={styles.bubbleGrid}>Intelligence: <Bubble count={json[0].intelligence} /></h2>
          <h2 className={styles.bubbleGrid}>Health Issues: <Bubble count={json[0].health_issues} /></h2>
          <h2 className={styles.bubbleGrid}>Social Needs: <Bubble count={json[0].social_needs} /></h2>
          <h2 className={styles.bubbleGrid}>Stranger Friendly: <Bubble count={json[0].stranger_friendly} /></h2>
        </section>
      </div>
      <section>
        <h3 className={styles.fs35}>Other Images</h3>
        <div className={styles.otherImagesGrid}>
          {
            otherImagesUrls?.map((image, index) => {
              return (
                <Image key={index} src={image} alt="" width="400" height="400" objectFit="cover" className={styles.radius} />
              )
            })
          }
        </div>
      </section>
    </main>
  )
}

async function getBreedBySearchTerm() {
  //const searchTerm = context.query.searchTerm ?? "";

  const searchParams = useSearchParams()

  const searchTerm = searchParams.get('search')

  const res = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`, {
    method: 'GET',
    headers: {
      "x-api-key": process.env.API_KEY
    }
  })

  const json = await res.json();
  return json;
}

async function getHeroImage(json){

  const res2 = await fetch(`https://api.thecatapi.com/v1/images/${json[0]?.reference_image_id}`, {
    method: 'GET',
    headers: {
      "x-api-key": process.env.API_KEY
    }
  })

  const image = await res2.json();
  return image;
}

async function getOtherImages(json){
  const res3 = await fetch(`https://api.thecatapi.com/v1/images/search?limit=6&breed_ids=${json[0]?.id}`);

  const otherImages = await res3.json();
  return otherImages;
}

export default async function getSingleBreedData() {

  const json = await getBreedBySearchTerm()

  
  //const image = await getHeroImage(json)

  //const otherImages = await getOtherImages(json)

  // return <Breed2 json={json} image={image} otherImages={otherImages} />

  return <Breed2 json={json} image={image} otherImages={otherImages} />
}