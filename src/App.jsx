import './App.css'
import Card from './components/Card.jsx'

function App() {

  return (
    <>
      <h1 className='header'>CHRISTIAN ✦ RESOURCES</h1>
      <h2>Deepen your understanding of Jesus with Biblical resources</h2>
      <p className='verse'>Hebrews 4:12 “For the word of God is living and active, sharper than any two-edged sword, piercing to the division of soul and of spirit, of joints and of marrow, and discerning the thoughts and intentions of the heart.”
      </p>
      <div className='card-container'>
        <Card 
          link="/enduringWord.jpg" 
          title="Enduring Word" 
          description="A trusted, easy-to-understand Bible commentary that provides verse-by-verse explanations of Scripture. Popular for its clear and concise interpretation of biblical texts."
          href="https://enduringword.com"
        />
        
        <Card 
          link="/bibleProject.jpg" 
          title="The Bible Project" 
          description="An animated video series that explains the narrative of Scripture and themes of the Bible, offering a visual and easy-to-understand way to explore God's Word."
          href="https://bibleproject.com"
        />
        
        <Card 
          link="/logos.webp" 
          title="Logos Bible Software" 
          description="A powerful Bible study tool that helps users dive deep into scripture with a vast library of books, commentaries, and tools for studying the Bible."
          href="https://www.logos.com"
        />
        
        <Card 
          link="/giveMeAnAnswer.jpg" 
          title="Give Me An Answer with Cliff & Stuart" 
          description="A show that addresses tough questions from a biblical perspective, helping listeners navigate faith, apologetics, and cultural issues in light of Scripture."
          href="https://www.givemeananswer.org"
        />
        
        <Card 
          link="/wesleyHuff.webp" 
          title="Wesley Huff" 
          description="A theologian and Bible teacher offering sound biblical teaching, particularly focusing on the intersection of faith, culture, and Scripture in modern life."
          href="https://www.wesleyhuff.com"
        />
        
        <Card 
          link="/jackieHillPerry.webp" 
          title="Jackie Hill Perry" 
          description="An author, speaker, and Bible teacher whose teaching emphasizes the power of God's Word in transformation and her personal journey of faith."
          href="https://www.jackiehillperry.com"
        />

        <Card 
          link="/theChosen.jpg" 
          title="The Chosen" 
          description="The Chosen is a popular TV drama series based on the life of Jesus Christ, offering a fresh and engaging perspective on His story. Watch it to deepen your understanding of His life and ministry." 
          href="https://www.thechosen.tv/en-us"
        />

        <Card 
          link="/gotQuestions.jpeg" 
          title="Got Questions" 
          description="A platform offering biblical answers to common and complex questions, written by a team of theologians and scholars to help people grow in their understanding of Scripture."
          href="https://www.gotquestions.org"
        />

        <Card 
          link="/bibleHub.png" 
          title="Bible Hub" 
          description="An online Bible resource offering a wealth of study tools, including commentaries, translations, concordances, and Bible dictionaries for in-depth study."
          href="https://biblehub.com"
        />
        
        <Card 
          link="/desiringGod.jpg" 
          title="Desiring God" 
          description="A ministry founded by John Piper, providing resources to help people pursue the glory of God, including articles, books, podcasts, and sermons."
          href="https://www.desiringgod.org"
        />

        <Card 
          link="/bibleGateway.webp" 
          title="Bible Gateway" 
          description="A popular online Bible resource offering access to a wide variety of Bible translations, along with study tools, devotionals, and reading plans for personal growth." 
          href="https://www.biblegateway.com"
        />

        <Card 
          link="/sermonAudio.webp" 
          title="SermonAudio" 
          description="A platform that provides access to thousands of sermons from pastors, theologians, and Bible teachers around the world, offering both audio and video content for spiritual growth." 
          href="https://www.sermonaudio.com"
        />
      </div> 
    </>
  )
}

export default App;
