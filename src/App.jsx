/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 30/12/2025 - 18:01:56
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 30/12/2025
    * - Author          : fortu
    * - Modification    : 
**/
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCopy, FaCheck, FaChevronDown, FaMobileAlt, FaGem, FaCrown, FaUsers } from 'react-icons/fa'
import './App.css'

function App() {
  const [copied, setCopied] = useState(false)
  const [solAmount, setSolAmount] = useState('')
  const [faqOpen, setFaqOpen] = useState(false)
  const contractAddress = 'BKQcgUD2R2PPc9uw25xnCMKVoN3Fa7H3zc8Nfbsg58EG'

  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const calculateTokens = (sol) => {
    return (parseFloat(sol) * 10000).toLocaleString()
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  const toggleFaq = () => {
    setFaqOpen(!faqOpen)
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <div className="app">
      {/* Navbar */}
      <motion.nav 
        className="navbar"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="nav-container">
          <div className="logo-section" onClick={scrollToTop}>
            <span className="brand-name">WhaleWifHat</span>
          </div>
          <div className="nav-links">
            <a onClick={() => scrollToSection('about')}>About</a>
            <a onClick={() => scrollToSection('tokenomics')}>Tokenomics</a>
            <a onClick={() => scrollToSection('roadmap')}>Roadmap</a>
            <a onClick={() => scrollToSection('faq')}>FAQ</a>
          </div>
          <button className="join-btn" onClick={copyAddress}>
            {copied ? <FaCheck /> : <FaCopy />}
            {copied ? 'Copied!' : 'Join Us'}
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Welcome to the
              <span className="gradient-text"> WhaleWifHat </span>
              Presale
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A premium memecoin built on Solana's lightning-fast blockchain. WhaleWifHat combines sophistication with community-driven growth, offering early investors exclusive access to the future of luxury digital assets. Be part of the revolution.
            </motion.p>

            {/* Presale Box */}
            <motion.div 
              className="presale-box"
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="presale-header">
                <h3>Presale is Live</h3>
                <div className="rate">1 SOL = 10,000 WHALE</div>
              </div>
              
              <div className="presale-input-section">
                <label>Enter SOL Amount (Max 100 SOL)</label>
                <input 
                  type="number" 
                  placeholder="0.0"
                  min="0"
                  max="100"
                  step="0.1"
                  value={solAmount}
                  onChange={(e) => {
                    const value = parseFloat(e.target.value)
                    if (value <= 100 || e.target.value === '') {
                      setSolAmount(e.target.value)
                    }
                  }}
                  className="sol-input"
                />
                {solAmount && (
                  <div className="token-preview">
                    You will receive: <span>{calculateTokens(solAmount)} WHALE</span>
                  </div>
                )}
              </div>

              <div className="contract-address">
                <label>Send SOL to this address:</label>
                <div className="address-box" onClick={copyAddress}>
                  <code>{contractAddress}</code>
                  {copied ? <FaCheck className="copy-icon success" /> : <FaCopy className="copy-icon" />}
                </div>
              </div>

              <div className="instructions">
                <h4><FaMobileAlt className="inline-icon" /> How to Buy with Phantom:</h4>
                <ol>
                  <li>Open your Phantom wallet</li>
                  <li>Click "Send" and paste the address above</li>
                  <li>Enter your SOL amount (max 100 SOL)</li>
                  <li>Confirm the transaction</li>
                  <li>Tokens will be airdropped after presale ends</li>
                </ol>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img 
              src="/whale.jpg" 
              alt="WhaleWifHat"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about"
        className="section about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <h2 className="section-title">About WhaleWifHat</h2>
          <p className="section-description">
            In the deep blue ocean of crypto, one whale stands out from the rest. 
            Not just because of its massive presence, but because of its impeccable fashion sense. 
            WhaleWifHat isn't just a memecoin – it's a lifestyle, a statement, a revolution in luxury digital assets.
          </p>
          <div className="features-grid">
            <motion.div 
              className="feature-card"
              variants={scaleIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3><FaCrown className="inline-icon" /> Luxury Branding</h3>
              <p>Premium memecoin with sophisticated aesthetics</p>
            </motion.div>
            <motion.div 
              className="feature-card"
              variants={scaleIn}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3><FaUsers className="inline-icon" /> Community Driven</h3>
              <p>Join an exclusive club of whale enthusiasts</p>
            </motion.div>
            <motion.div 
              className="feature-card"
              variants={scaleIn}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3><FaGem className="inline-icon" /> Limited Supply</h3>
              <p>Scarce tokens for maximum value potential</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Tokenomics Section */}
      <motion.section 
        id="tokenomics"
        className="section tokenomics"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <h2 className="section-title">Tokenomics</h2>
          <p className="section-description">
            A carefully designed distribution ensuring fair launch, strong liquidity, and sustainable growth for the WhaleWifHat ecosystem.
          </p>
          <div className="tokenomics-grid">
            <motion.div 
              className="tokenomics-card"
              variants={scaleIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="percentage">40%</div>
              <div className="label">Presale</div>
              <p className="tokenomics-description">Reserved for early supporters. Fair launch with maximum 100 SOL per wallet to ensure wide distribution.</p>
            </motion.div>
            <motion.div 
              className="tokenomics-card"
              variants={scaleIn}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="percentage">30%</div>
              <div className="label">Liquidity Pool</div>
              <p className="tokenomics-description">Locked liquidity on Raydium/Orca for stable trading. LP tokens burned to ensure investor confidence.</p>
            </motion.div>
            <motion.div 
              className="tokenomics-card"
              variants={scaleIn}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="percentage">20%</div>
              <div className="label">Marketing</div>
              <p className="tokenomics-description">Strategic marketing campaigns, influencer partnerships, and community growth initiatives.</p>
            </motion.div>
            <motion.div 
              className="tokenomics-card"
              variants={scaleIn}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="percentage">10%</div>
              <div className="label">Team</div>
              <p className="tokenomics-description">Team allocation with 6-month vesting period to align long-term vision and project success.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Roadmap Section */}
      <motion.section 
        id="roadmap"
        className="section roadmap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <h2 className="section-title">Roadmap</h2>
          <div className="roadmap-timeline">
            <motion.div 
              className="roadmap-item active"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="roadmap-connector">
                <div className="roadmap-dot"></div>
                <div className="roadmap-line"></div>
              </div>
              <div className="roadmap-content">
                <div className="roadmap-header">
                  <div className="roadmap-phase">Phase 1</div>
                  <span className="roadmap-status active">In Progress</span>
                </div>
                <h3>Launch</h3>
                <p className="roadmap-description">Establishing WhaleWifHat's presence in the Solana ecosystem</p>
                <ul>
                  <li>Presale Launch</li>
                  <li>Community Building</li>
                  <li>Social Media Campaigns</li>
                  <li>Website & Branding</li>
                </ul>
              </div>
            </motion.div>
            <motion.div 
              className="roadmap-item"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="roadmap-connector">
                <div className="roadmap-dot"></div>
                <div className="roadmap-line"></div>
              </div>
              <div className="roadmap-content">
                <div className="roadmap-header">
                  <div className="roadmap-phase">Phase 2</div>
                  <span className="roadmap-status">Q1 2025</span>
                </div>
                <h3>Growth</h3>
                <p className="roadmap-description">Expanding reach and building momentum</p>
                <ul>
                  <li>DEX Listing (Raydium/Orca)</li>
                  <li>Aggressive Marketing Push</li>
                  <li>Strategic Partnerships</li>
                  <li>Community Events</li>
                </ul>
              </div>
            </motion.div>
            <motion.div 
              className="roadmap-item"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="roadmap-connector">
                <div className="roadmap-dot"></div>
                <div className="roadmap-line"></div>
              </div>
              <div className="roadmap-content">
                <div className="roadmap-header">
                  <div className="roadmap-phase">Phase 3</div>
                  <span className="roadmap-status">Q2 2025</span>
                </div>
                <h3>Expansion</h3>
                <p className="roadmap-description">Scaling operations and reaching new markets</p>
                <ul>
                  <li>CEX Listings (Tier 1 & 2)</li>
                  <li>Exclusive NFT Collection</li>
                  <li>Ecosystem Development</li>
                  <li>Ambassador Program</li>
                </ul>
              </div>
            </motion.div>
            <motion.div 
              className="roadmap-item"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="roadmap-connector">
                <div className="roadmap-dot"></div>
              </div>
              <div className="roadmap-content">
                <div className="roadmap-header">
                  <div className="roadmap-phase">Phase 4</div>
                  <span className="roadmap-status">Q3-Q4 2025</span>
                </div>
                <h3>Dominance</h3>
                <p className="roadmap-description">Establishing WhaleWifHat as a premium brand</p>
                <ul>
                  <li>Whale Lounge (Exclusive Club)</li>
                  <li>Premium Merchandise Line</li>
                  <li>Global Brand Recognition</li>
                  <li>Cross-chain Expansion</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        id="faq"
        className="section faq"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <button className="faq-toggle-btn" onClick={toggleFaq}>
            {faqOpen ? 'Hide' : 'Show'} FAQs <FaChevronDown className={`faq-toggle-icon ${faqOpen ? 'open' : ''}`} />
          </button>
          <AnimatePresence>
            {faqOpen && (
              <motion.div 
                className="faq-grid"
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <motion.div 
                  className="faq-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3>What is WhaleWifHat?</h3>
                  <p>WhaleWifHat is a luxury memecoin on Solana that combines humor with sophisticated branding. It's a community-driven project celebrating whales with style.</p>
                </motion.div>
                <motion.div 
                  className="faq-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3>How do I participate in the presale?</h3>
                  <p>Simply send SOL to our contract address (max 100 SOL). Your WHALE tokens will be airdropped after the presale ends.</p>
                </motion.div>
                <motion.div 
                  className="faq-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3>When will tokens be distributed?</h3>
                  <p>Tokens will be airdropped to all presale participants within 48 hours after the presale concludes.</p>
                </motion.div>
                <motion.div 
                  className="faq-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3>Is there a minimum buy?</h3>
                  <p>No minimum! However, there is a maximum of 100 SOL per transaction to ensure fair distribution.</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="copyright">© 2025 WhaleWifHat. All rights reserved.</p>
          <p className="disclaimer">Cryptocurrency investments carry risk. Do your own research.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
