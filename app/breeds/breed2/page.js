'use client'

// need to look up how to change title in a client page

import { useSearchParams } from 'next/navigation'
import Bubble from "../../../components/Bubble"
import styles from './bubble.module.css'
import Image from 'next/legacy/image'

import { useState, useEffect, Suspense } from 'react'

export default function Breed2() {

  const [json, setJson] = useState(null)
  const [image, setImage] = useState(null)
  const [otherImageUrls, setOtherImageUrls] = useState(null)

  // const controller = new AbortController()
  // Adding controller causes problems ?

  const searchParams = useSearchParams()

  const searchTerm = searchParams.get('searchTerm')

  useEffect(() => {

    async function getBreedBySearchTerm(searchTerm) {
      const res = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`, {
        method: 'GET',
        headers: {
          "x-api-key": process.env.API_KEY
        }
      })

      const json = await res.json();
      return json;
    }

    async function getHeroImage(json) {
      const res2 = await fetch(`https://api.thecatapi.com/v1/images/${json[0]?.reference_image_id}`, {
        method: 'GET',
        headers: {
          "x-api-key": process.env.API_KEY
        }
      })
      const image = await res2.json();
      return image;
    }

    async function getOtherImageUrls(json) {
      const res3 = await fetch(`https://api.thecatapi.com/v1/images/search?limit=6&breed_ids=${json[0]?.id}`, {
        method: 'GET',
        headers: {
          "x-api-key": process.env.API_KEY
        }
      });
      const otherImages = await res3.json();
      return otherImages;
    }

    const fetchBreedData = async () => {
      const json = await getBreedBySearchTerm(searchTerm);

      //const image = await getHeroImage(json);
      //const otherImageUrls = await getOtherImageUrls(json);

      // Initiate both requests in parallel
      const heroImage = getHeroImage(json);
      const imageUrls = getOtherImageUrls(json);

      // Wait for the promises to resolve
      const [image, otherImageUrls] = await Promise.all([heroImage, imageUrls]);

      setJson(json);
      setImage(image);
      setOtherImageUrls(otherImageUrls);
    }

    fetchBreedData();

  }, [])

  return (
    <main>
      <Suspense fallback={<h1>Loading</h1>}>
        <div className={styles.topGrid}>
          <div>
            {image && <Image src={image.url} alt="" width="400" height="400" className={styles.radius} priority />}
          </div>
          {json && <section>
            <h1>{json[0].name}</h1>
            <p className={styles.description}>{json[0].description}</p>
            <h2>Termperament: {json[0].temperament}</h2>
            <h2>Origin: {json[0].origin}</h2>
            <h2>Life Span: {json[0].life_span} years</h2>
            <h2 className={styles.bubbleGrid}>Adaptability: <Bubble count={json && json[0].adaptability} /></h2>
            <h2 className={styles.bubbleGrid}>Affection Level: <Bubble count={json && json[0].affection_level} /></h2>
            <h2 className={styles.bubbleGrid}>Child Friendly: <Bubble count={json && json[0].child_friendly} /></h2>
            <h2 className={styles.bubbleGrid}>Grooming: <Bubble count={json && json[0].grooming} /></h2>
            <h2 className={styles.bubbleGrid}>Intelligence: <Bubble count={json && json[0].intelligence} /></h2>
            <h2 className={styles.bubbleGrid}>Health Issues: <Bubble count={json && json[0].health_issues} /></h2>
            <h2 className={styles.bubbleGrid}>Social Needs: <Bubble count={json && json[0].social_needs} /></h2>
            <h2 className={styles.bubbleGrid}>Stranger Friendly: <Bubble count={json && json[0].stranger_friendly} /></h2>
          </section>}
        </div>
        {otherImageUrls && <section>
          <h3 className={styles.fs35}>Other Images</h3>
          <div className={styles.otherImagesGrid}>
            {
              otherImageUrls.map((image, index) => {
                return (
                  <Image key={index} src={image.url} alt="" width="400" height="400" objectFit="cover" className={styles.radius} />
                )
              })
            }
          </div>
        </section>}
      </Suspense>
    </main>
  )
}
