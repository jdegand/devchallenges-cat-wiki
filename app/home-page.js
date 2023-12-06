'use client';

import styles from './home.module.css';
import Image from 'next/legacy/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Suggestions from '../components/Suggestions';

export default function HomePage({ json }) {

  useEffect(()=> {
    document.title = 'Cat Wiki';
  }, []);

  const breeds = json.map(i => i.name);

  const featuredBreeds = json.filter(function (item) { return ['beng', 'sava', 'norw', 'srex'].indexOf(item.id) != -1 });

  const [searchTerm, setSearchTerm] = useState('');
  const [toggle, setToggle] = useState(true);

  const router = useRouter(); // need to investigate if I need to replace or amend this

  const handleSearch = (e) => {
    setToggle(true);
    setSearchTerm(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (breeds.includes(searchTerm)) {
      router.push(`/breeds/breed?searchTerm=${searchTerm}`);
    } else {
      alert(`${searchTerm} not found`);
    }
  }

  const handleSuggestion = (e) => {
    document.getElementById('search').value = e.target.innerText;
    setSearchTerm(e.target.innerText);
    setToggle(false);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.searchDiv}>
          <Image className={styles.bgImage} src="/HeroImage-md.png" alt="" layout="fill" priority />
          <Image src="/CatwikiLogoWhite.svg" alt="" width="300" height="200" layout="fixed" priority />
          <h1 className={styles.marginEnd}>Get to know more about your cat breed</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.floatingGroup}>
              <input className={styles.searchInput} id="search" maxLength={35} onChange={handleSearch} required />
              <label className={styles.floatingLabel} htmlFor="search">Enter your breed</label>
              <button className={styles.searchBtn} aria-label="Search" title="Search"><Image src="/magnify.svg" alt="" width="24" height="24" /></button>
            </div>
          </form>
          {searchTerm.length >= 1 && toggle && <Suggestions breeds={breeds} searchTerm={searchTerm} handleClick={handleSuggestion} />}
        </div>
        <section className={styles.breedSection}>
          <p>Most Searched Breeds</p>
          <div className={styles.brownLine}></div>
          <div className={styles.discoverBreeds}>
            <h2 className={styles.fs48}>66+ Breeds For you to discover</h2>
            <Link prefetch={false} href="/breeds" passHref={true}>
              <p className={styles.readMore}>SEE MORE <span>&rarr;</span></p>
            </Link>
          </div>
          <div className={styles.breedFlex}>
            {
              featuredBreeds.map(breed => {
                return (
                  <Link prefetch={false} href={`/breeds/breed?searchTerm=${encodeURI(breed.name)}`} key={breed.image.id} passHref={true}>
                    <div className={styles.breedDiv}>
                      <Image className={styles.breedImage} src={breed.image.url} alt="" width="250" height="250" />
                      <div>{breed.name}</div>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </section>
        <section className={styles.shouldSection}>
          <div className={styles.padding125}>
            <div className={styles.brownLine}></div>
            <h2 className={styles.fs48}>Why should you have a cat?</h2>
            <p>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety levels.</p>
            <Link prefetch={false} href="/benefits" passHref={true}>
              <p className={`${styles.readMore} ${styles.marginBlock}`}>READ MORE <span>&rarr;</span></p>
            </Link>
          </div>
          <div className={styles.imageGrid}>
            <div className={styles.image1}><Image src="/image-2.png" alt="" width="400" height="200" objectFit="fill" /></div>
            <div className={styles.image2}><Image src="/image-3.png" alt="" width="200" height="450" objectFit="fill" /></div>
            <div className={styles.image3}><Image src="/image-1.png" alt="" width="300" height="400" objectFit="fill" /></div>
          </div>
        </section>
      </div>
    </>
  )
}
