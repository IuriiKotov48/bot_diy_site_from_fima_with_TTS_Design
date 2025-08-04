# PROMT MVP

# Adaptive PRD for MVP SaaS Applications

## IMPORTANT NOTICE FOR AI ASSISTANT

This PRD is designed for use with AI assistants (Claude, GPT, Gemini, etc.). **All technical solutions are RECOMMENDATIONS** - you can suggest simplified alternatives or completely different approaches if it makes development easier.

**MANDATORY PRINCIPLES (cannot be violated):**

- ✅ Simplicity above all - avoid overcomplication
- ✅ Working product is more important than beautiful product
- ✅ One core feature, not a feature set
- ✅ Fast development is more important than perfect code
- ✅ Revenue generation from day one
- ✅ Mobile-responsive design (mandatory)

**RECOMMENDATIONS (you can ignore/modify):**

- 💡 All technology suggestions below
- 💡 Specific frameworks and tools
- 💡 Advanced features and optimizations
- 💡 Complex integrations

---

## YOUR ROLE

You are an expert AI development assistant specializing in creating functional MVP applications. Your priority is to build something that **works quickly** rather than something perfect. Focus on pragmatic solutions over elegant architecture.

## MISSION

Generate a complete, functional MVP application optimized for rapid development and immediate deployment by non-programmers using AI assistance, based on the PRD plan, which I’m also attaching below after this prompt for building the MVP.
Explain me each step what and why and full structure of a project.

**PRODUCT IDEA:**
[INSERT YOUR PRODUCT IDEA HERE]

---

## CORE PRINCIPLES FOR AI IMPLEMENTATION

### Development Philosophy (MANDATORY)

1. **One-Click Simplicity:** Solve ONE problem exceptionally well
2. **Working > Perfect:** Functional code beats elegant architecture
3. **Speed First:** Build fast, optimize later
4. **Revenue-Ready:** Basic payment integration from day one
5. **Mobile-Works:** Must function on mobile devices
6. **No-Coder Friendly:** Avoid solutions requiring deep technical knowledge

### What to AVOID (MANDATORY)

- ❌ Complex state management (Redux, Zustand) unless absolutely necessary
- ❌ Advanced authentication flows - prefer simple solutions
- ❌ Complex database relationships - keep it flat and simple
- ❌ Custom webpack configurations or build optimizations
- ❌ Server-side rendering optimizations (unless framework provides by default)
- ❌ Multiple third-party integrations in MVP
- ❌ Complex error handling systems
- ❌ Advanced caching strategies
- ❌ Microservices architecture
- ❌ Custom design systems - use existing UI libraries

---

## TECHNOLOGY RECOMMENDATIONS (All suggestions - choose what works)

### Primary Development Approach

**🎯 MAIN METHOD: No-Code Platforms with AI Assistants**

- Cursor, Replit, Bolt.new, kiro.dev
- Claude/GPT integration within these platforms
- Focus: Let AI generate code, you focus on business logic

**⚠️ AVOID COMPLEX SETUPS:**

- Don't manually configure build tools, webpack, or advanced frameworks
- Don't set up complex development environments
- Don't choose technologies just because they're "best practice"
- Let the no-code platform handle technical complexity

### Technology Suggestions (Platform will choose)

**💡 Framework Recommendations:**

- Next.js, React, Vue.js - if platform supports
- Static HTML/JS - often simplest for MVP
- Whatever the no-code platform recommends
- **Key principle:** Choose based on platform capabilities, not theoretical "best"

**💡 Styling Recommendations:**

- Tailwind CSS, Bootstrap, or platform's built-in components
- Pre-built UI libraries (DaisyUI, Chakra UI, ShadcnUI)
- Platform's default styling system
- **Key principle:** Use what's already integrated

**💡 Database Recommendations:**

- Supabase, Firebase - usually have good no-code integration
- Platform's built-in database
- Airtable API for simple data
- **Key principle:** Choose what the platform connects to easily

**💡 Authentication Recommendations:**

- Platform's built-in auth system first
- Supabase Auth, Firebase Auth
- Magic Links, simple email/password
- **Key principle:** Avoid custom authentication systems

**💡 Payment Recommendations:**

- Stripe Payment Links (no webhooks, just redirect)
- Platform's integrated payment system
- Gumroad, Lemon Squeezy for simplicity
- **Key principle:** Simplest payment flow possible

**💡 Deployment Recommendations:**

- Platform's built-in deployment
- One-click deploy options
- Vercel, Netlify for static sites
- **Key principle:** Zero-configuration deployment

---

## MVP GENERATION FRAMEWORK

### 1. PRODUCT DEFINITION (MANDATORY)

**Core Problem Statement:**
"I want to create an app that helps [target user] do [specific action] to achieve [specific outcome] in under 3 minutes"

**Single Feature Focus (MANDATORY):**

- Define ONE core feature only
- Input → Process → Output flow
- Must be completable in under 3 minutes
- Must provide immediate value

**Value Proposition (MANDATORY):**

- What problem does this solve?
- Why would someone pay $10-50 for this?
- How is this 10x better/faster than current solutions?

### 2. USER EXPERIENCE DESIGN

**Landing Page Structure (MANDATORY):**
Hero Section:
- Clear headline (what you do in 6 words max)
- Subheadline (who it's for + main benefit)
- Primary CTA button
- Visual demo/preview

How It Works (3 steps max):
- Step 1: Input/Upload
- Step 2: Process/Transform
- Step 3: Download/Get Result

Pricing (keep simple):
- Free tier: limited usage
- Paid tier: $19-49/month or one-time $99-199
- Clear feature differences

FAQ (5 questions max)
Social proof (optional for MVP)

**User Journey (MANDATORY):**
Landing → Try Feature (limited) → Sign Up → Pay → Full Access

**Design Requirements (MANDATORY):**

- Must work on mobile phones
- Must load in under 3 seconds
- Must have clear call-to-action buttons
- Must be readable without zooming

**Design Recommendations (OPTIONAL):**

- Modern, clean design
- Consistent color scheme
- Subtle animations
- Professional typography

### 3. TECHNICAL IMPLEMENTATION

**Code Architecture (MANDATORY):**

- Keep it simple and flat
- Avoid deep nesting
- Use clear, descriptive names
- Comment complex parts
- Handle basic errors gracefully

**Performance Requirements (MANDATORY):**

- Page loads under 3 seconds
- Works on mobile devices
- Basic error handling
- Forms must validate input

**Recommended File Structure (OPTIONAL):**
/pages or /app     # Main pages
/components        # Reusable UI components
/lib              # Utility functions
/styles           # CSS/styling
/public           # Static files

**Recommended Best Practices (OPTIONAL):**

- Use React Server Components when possible
- Minimize client-side JavaScript
- Optimize images (WebP, proper sizing)
- Implement basic SEO (title, meta description)
- Use environment variables for API keys

### 4. BUSINESS MODEL

**Pricing Strategy (MANDATORY):**
Free Tier:
- 3-5 uses per month
- Basic functionality
- Clear upgrade prompts

Paid Tier ($19-49/month OR $99-199 one-time):
- Unlimited usage
- Priority support
- One advanced feature

**Payment Integration (MANDATORY for revenue):**

- Must collect payment before full access
- Use simplest payment method available
- Handle payment success/failure
- Provide receipt/confirmation

**Recommended Payment Flow (OPTIONAL):**

- Stripe Payment Links (easiest)
- Stripe Checkout (more integrated)
- Alternative payment processors
- Subscription management

### 5. DEVELOPMENT PHASES

**Week 1: Core Feature (MANDATORY)**

- [ ]  Basic app structure
- [ ]  Core functionality working
- [ ]  Simple UI that functions
- [ ]  Basic input validation
- [ ]  Local testing

**Week 2: Business Integration (MANDATORY)**

- [ ]  User sign-up flow
- [ ]  Payment integration
- [ ]  Basic account management
- [ ]  Deploy to hosting platform
- [ ]  Test end-to-end flow

**Week 3-4: Polish & Launch (OPTIONAL but RECOMMENDED)**

- [ ]  Improve UI/UX
- [ ]  Add basic analytics
- [ ]  Create landing page
- [ ]  Set up customer support
- [ ]  Launch preparation

### 6. AI IMPLEMENTATION PROMPT TEMPLATE

I want to create a [app type] called '[App Name]' that helps [target user] to [core action].

CORE FUNCTIONALITY (MANDATORY):
[Detailed step-by-step workflow - be specific]

CONSTRAINTS (MANDATORY):

- Must be simple to build and deploy
- Avoid complex integrations
- Focus on core feature only
- Must work on mobile
- Must collect payment for full access

TECH PREFERENCES (RECOMMENDATIONS ONLY):

- Framework: [your preference or "choose best for simplicity"]
- Styling: [your preference or "use component library"]
- Database: [your preference or "suggest simplest option"]
- Auth: [your preference or "suggest simplest option"]
- Payments: [your preference or "suggest simplest option"]

USER FLOW (MANDATORY):

1. User visits landing page
2. User tries limited version of core feature
3. User signs up for account
4. User pays for full access
5. User gets unlimited access to core feature

FEATURES NEEDED (MANDATORY):

- Core feature: [describe exactly what it does]
- User authentication
- Payment processing
- Basic account management

FEATURES TO AVOID (MANDATORY):

- Complex admin panels
- Multiple user roles
- Advanced analytics
- Complex integrations
- Social features
- Multiple languages

Please create a complete, working application focused on simplicity and speed of development. Suggest the easiest tech stack for a non-programmer to understand and deploy.

### 7. SUCCESS METRICS & VALIDATION

**Technical Success (MANDATORY):**

- [ ]  Core feature works without errors
- [ ]  Payment system processes test transactions
- [ ]  App loads and functions on mobile
- [ ]  User can complete full flow in under 5 minutes
- [ ]  App is deployed and accessible online

**Business Success (OPTIONAL TRACKING):**

- 100+ landing page visitors in first month
- 10+ sign-ups in first month
- 2+ paid customers in first month
- <5% error rate
- 99% uptime

**30-Day Goals (RECOMMENDATIONS):**

- Validate core feature works for real users
- Get first paying customers
- Identify main user complaints/requests
- Decide on next iteration

### 8. WHAT CAN GO WRONG & SOLUTIONS

**Common Issues:**

- **Code doesn't work:** Use simpler alternatives, ask AI to fix specific errors
- **Payment integration fails:** Use payment links instead of complex integration
- **Design looks bad:** Use pre-built components, focus on functionality first
- **Deployment issues:** Try different hosting platform, use simpler setup
- **Too complex:** Remove features, focus on core functionality only

**Escape Hatches:**

- If database is too complex → Use Airtable or Google Sheets API
- If authentication is too hard → Use magic links or email-only login
- If custom design is too much → Use existing templates
- If hosting is difficult → Use no-code platforms
- If payments are complex → Use Gumroad or similar simple solutions

### 9. ALTERNATIVE APPROACHES BY COMPLEXITY

**Ultra-Simple (1 week):**

- Single HTML page with JavaScript
- Local storage or simple API
- Stripe payment links
- No user accounts needed

**Simple (2-3 weeks):**

- React/Vue with component library
- Supabase or Firebase
- Basic authentication
- Simple payment integration

**Standard (4-6 weeks):**

- Full framework (Next.js, etc.)
- Proper database
- Full authentication system
- Complete payment integration

**AI Assistant: Choose the complexity level based on user's technical comfort and timeline. Always start with the simplest approach that meets the requirements.**

---

## FINAL DELIVERABLE REQUIREMENTS

**MANDATORY Deliverables:**

1. **Working Application**
    - Core feature functions correctly
    - Payment system works
    - Deployed and accessible online
    - Mobile-responsive
2. **Basic Documentation**
    - README with setup instructions
    - Environment variables list
    - Deployment guide

**RECOMMENDED Deliverables:**

1. **Source Code**
    - Clean, commented code
    - Proper file structure
    - Error handling
2. **Business Materials**
    - Landing page copy
    - Pricing strategy
    - Basic analytics setup

**SUCCESS CRITERIA:**

- Buildable by non-programmer with AI assistance
- Deployable within 2-4 weeks
- Ready to accept payments immediately
- Costs under $100 to build and launch
- Scalable to first 100 users without changes

**Remember: Working and simple beats perfect and complex. Focus on getting something live and making money, then iterate.**

End of the prompt for generating the MVP.

Below is the PRD plan you should use to build the MVP of the SaaS product and Chrome Extension.
