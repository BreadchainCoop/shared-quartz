# Stacks (formerly Saving Circles)

## Overview
Stacks is a new Solidarity Primitive application focused on building a robust savings and stacking mechanism for the solidarity economy. Currently known as "Saving Circles" in the repositories, this system needs to be rebranded to "Stacks" as part of the Q4 deliverables. This quarter marks a significant push to launch v1 and begin planning v2.

## Q4 2025 Production Action Items

### Critical Path to Production

#### 1. Rebranding & Repository Migration
- **Action**: Rebrand all "Saving Circles" references to "Stacks"
- **Repositories to rename**:
  - `saving-circles` → `stacks`
  - `saving-circles-frontend` → `stacks-frontend`
- **Update all documentation, contracts, and UI elements**
- **Effort**: 2

#### 2. Core Infrastructure Fixes
- **Fix critical deposit feature** (Issue #1 in frontend)
- **Implement reliable Circle details access**
- **Complete token allowlist deployment handling** (Issue #19)
- **Effort**: 4

#### 3. Smart Contract Enhancements
- **Automated ERC20 allowance-based deposits** (Issue #39)
- **Batch account abstraction implementation**
- **Gelato automation integration** (Issue #8)
- **Optimize gas for multiple if-revert statements** (Issue #13)
- **Effort**: 4

#### 4. Testing & Security
- **Implement fuzz and invariant testing** (Issue #20)
- **Complete security audit**
- **Deploy to testnet for beta testing**
- **Effort**: 4

#### 5. User Experience
- **Adapt circle creation flow** (Issue #37)
- **Start off-chain with email, then move on-chain**
- **Frontend polish and responsive design**
- **User onboarding documentation**
- **Effort**: 3

#### 6. CI/CD & Deployment Infrastructure
- **Automatic CI/CD Pipeline**
  - Automated testing on every pull request
  - Automatic deployment to testnet on merge to development
  - Production deployment pipeline with multi-sig approval
  - Contract verification automation on all networks
- **Upgrade Safety Validation**
  - Automated upgrade safety checks using OpenZeppelin Defender
  - Storage layout validation to prevent upgrade conflicts
  - Simulation of upgrades on forked mainnet before deployment
  - Automated compatibility testing for proxy patterns
- **Decentralized Frontend Deployment**
  - IPFS deployment for frontend application
  - ENS integration for decentralized domain resolution
  - Arweave backup for permanent storage
  - Automated deployment to multiple gateways (Fleek, Pinata)
- **Effort**: 3

#### 7. Production Deployment
- **Deploy smart contracts to mainnet**
- **Launch production frontend via decentralized infrastructure**
- **Set up monitoring and alerting**
- **Create user support documentation**
- **Effort**: 3

### Development Phase 1: Launch v1
- **Action**: Complete development and launch Stacks App v1
- **Deliverable**: Launch Stacks App
- **Target**: Q4 2025
- **Budget**: Part of 40% Solidarity Primitives allocation

### User Acquisition
- **Action**: Onboard initial users to Stacks platform
- **Deliverable**: Get first users of Stacks
- **Target**: Q4 2025
- **Success Metric**: Active user base established

### Development Phase 2: Architecture Planning
- **Action**: Design and document v2 architecture
- **Deliverable**: Smart contracts Specs for Stacks v2
- **Target**: Q4 2025
- **Output**: Technical specifications and architecture documentation

## GitHub Issues - saving-circles-frontend Repository

| Issue # | Title | Description | Effort (1-5) | Status | Link |
|---------|-------|-------------|--------------|--------|------|
| #1 | Fix deposit feature | Fix deposit feature & enable reliable access to Circle details | 4 | OPEN | [Link](https://github.com/BreadchainCoop/saving-circles-frontend/issues/1) |

## GitHub Issues - saving-circles Repository

| Issue # | Title | Description | Effort (1-5) | Status | Link |
|---------|-------|-------------|--------------|--------|------|
| #39 | Automated Deposits | ERC20 Allowance-Based Deposits and Batch Account Abstraction | 4 | OPEN | [Link](https://github.com/BreadchainCoop/saving-circles/issues/39) |
| #37 | Adapt creation flow | Start off-chain with email, then move on-chain | 3 | OPEN | [Link](https://github.com/BreadchainCoop/saving-circles/issues/37) |
| #20 | Fuzz Testing | Implement Fuzz & Invariant Testing | 3 | OPEN | [Link](https://github.com/BreadchainCoop/saving-circles/issues/20) |
| #19 | Token allowlist | Token allowlist deployment handling | 2 | OPEN | [Link](https://github.com/BreadchainCoop/saving-circles/issues/19) |
| #13 | Gas optimization | Use multiple if-revert statements for gas savings | 2 | OPEN | [Link](https://github.com/BreadchainCoop/saving-circles/issues/13) |
| #8 | Gelato Automation | Add Gelato Automation integration | 3 | OPEN | [Link](https://github.com/BreadchainCoop/saving-circles/issues/8) |

### Closed Issues (Completed)
- #36: Denylist implementation
- #18: Documentation fixup
- #17: Gas optimizations for for-loops
- #16: Remove access control from decommission
- #15: Improve mapping lookups
- #14: If-revert with custom errors refactor
- #11: Unnecessary return declarations cleanup
- #10: Use modifiers
- #9: Gas optimizations
- #7: Cleanup Wonderland artifacts
- #4: Frontend compatibility
- #3: Functional V1 implementation
- #2: Add NatSpec comments
- #1: Saving Circles spec

## Production Readiness Checklist

### Must Have for Launch
- [ ] Repository rebranding complete
- [ ] Critical deposit bug fixed
- [ ] Smart contracts audited
- [ ] Mainnet deployment ready
- [ ] Basic user documentation
- [ ] Frontend functional and tested
- [ ] Token allowlist configured
- [ ] Circle creation flow implemented

### Nice to Have
- [ ] Gelato automation
- [ ] Advanced gas optimizations
- [ ] Comprehensive fuzz testing
- [ ] Email-based onboarding
- [ ] Batch account abstraction

## Success Metrics
- Successfully launch Stacks v1 application
- Acquire and onboard first cohort of users (target: 50 users)
- Complete technical specifications for v2 smart contracts
- Zero critical bugs in production
- $10,000+ TVL within first month
- Establish foundation for future funding opportunities
- 100% automated CI/CD pipeline operational
- Zero manual deployment steps required
- Frontend accessible via at least 3 decentralized gateways
- All contract upgrades pass automated safety validation

## Effort Estimation Guide
- **1**: Trivial change (< 2 hours)
- **2**: Simple task (2-8 hours)
- **3**: Moderate complexity (1-3 days)
- **4**: Complex task (3-5 days)
- **5**: Very complex (1+ week)

## Strategic Importance
As noted in the Strategic Directives: "This means a focus on pushing out Stacks v1 as an application and using it as an opportunity for more funding."

## Current Status
- **Status**: Q4 Target - Production Launch Required
- **Priority**: Key focus within Priority 3 - Solidarity Primitives expansion
- **Repositories**: 
  - [saving-circles](https://github.com/BreadchainCoop/saving-circles) (needs rebranding)
  - [saving-circles-frontend](https://github.com/BreadchainCoop/saving-circles-frontend) (needs rebranding)