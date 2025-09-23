# Safety Net (formerly BreadFunds)

## Overview
Safety Net is a Solidarity Primitive designed to provide mutual aid and support mechanisms within the crypto solidarity economy through smart contracts. Currently known as "BreadFunds" in the repositories, this system needs to be rebranded to "Safety Net" as part of the Q4 deliverables. The system enables groups to pool resources for collective financial safety.

## Q4 2025 Production Action Items

### Critical Path to Production

#### 1. Rebranding & Repository Migration
- **Action**: Rebrand all "BreadFunds" references to "Safety Net"
- **Repositories to rename**:
  - `breadfunds` → `safety-net`
  - `breadfunds-app` → `safety-net-app`
- **Update all documentation, contracts, and UI elements**
- **Effort**: 2

#### 1.5. Critical Code Review Findings

**Repository Configuration:**
- **Wrong Package Name** - Still using "solidity-foundry-boilerplate"
- **Version Inconsistency** - Contracts use ^0.8.28 but foundry.toml specifies 0.8.28
- **React 19 Bleeding Edge** - Using unstable React version in frontend
- **Mixed Dependencies** - Radix UI with mix of pinned and "latest" versions
- **Effort**: 2

**Security & Technical Debt:**
- **No Web3 Integration** - Frontend missing wallet connection code
- **No State Management** - Missing global state solution
- **No Error Boundaries** - Missing React error boundaries
- **No CSP Headers** - Missing Content Security Policy
- **No Input Validation** - Client-side validation framework missing
- **Limited Tests** - Only 8 test files for complex functionality
- **Effort**: 4

**Missing Infrastructure:**
- **No Bundle Analysis** - Missing webpack bundle analyzer
- **No Performance Monitoring** - No APM or error tracking
- **No CI/CD Pipeline** - Manual deployment only
- **No Multi-sig Setup** - ADMIN_ADDRESS needs proper multisig
- **No Gas Benchmarking** - Missing optimization analysis
- **Effort**: 3

#### 2. Critical Bug Fixes
- **Fix deposit cap issue** - First deposit permanently fixes daily cap (Issue #40)
- **Fix withdrawal request vulnerability** - Prevent member withdrawables reduction bug (Issue #38)
- **Implement deposit validation** - Add "exact dues" enforcement (Issue #39)
- **Add input validation** - Prevent unsafe ratio values (Issue #23)
- **Effort**: 5

#### 3. Smart Contract Core Development
- **Complete Safety Net v1 smart contracts**
- **Implement automated ERC20 allowance-based deposits** (Issue #32)
- **Enable fund creation without specifying all users** (Issue #42)
- **Add deposit on behalf of user functionality** (Issue #19)
- **Implement contestation threshold logic** (Issue #14)
- **Effort**: 4

#### 4. Testing & Security
- **Create comprehensive test suite** (Issue #13)
- **Implement fuzz testing** (Issue #16)
- **Add unit tests for reliability** (Issue #17)
- **Security audit for production deployment**
- **Effort**: 4

#### 5. User Experience & Frontend
- **Design process tracking for app** (Issue #2)
- **Implement data display list for users** (Issue #1)
- **Add view methods for frontend data aggregation** (Issue #11)
- **Create notification system for withdrawal voting** (Issue #24)
- **Effort**: 3

#### 6. Risk Management Features
- **Develop context-aware risk ratio formula** (Issue #29)
- **Research liquidity-aware epoch ratio** (Issue #30)
- **Implement blanket withdrawal delay** (Issue #33)
- **Prime-based crediting system** (Issue #31)
- **Effort**: 4

#### 7. CI/CD & Deployment Infrastructure
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

#### 8. Production Deployment
- **Deploy smart contracts to mainnet**
- **Launch production frontend via decentralized infrastructure**
- **Set up monitoring and alerting**
- **Create user documentation and guides**
- **Provide design team with configurable variables list** (Issue #41)
- **Effort**: 3

### Smart Contract Development
- **Action**: Develop and deploy Safety Net v1 smart contracts
- **Deliverable**: Smart contracts for Safety Net v1
- **Target**: Q4 2025
- **Budget**: Part of 40% Solidarity Primitives allocation

## GitHub Issues - breadfunds-app Repository

| Issue # | Title | Description | Effort (1-5) | Status | Link |
|---------|-------|-------------|--------------|--------|------|
| #2 | Process Tracking Design | Design v1: Process Tracking for Breadfunds App | 3 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds-app/issues/2) |
| #1 | Data Display Design | Design Deliverable: List of Data Displayed to User | 2 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds-app/issues/1) |

## GitHub Issues - breadfunds Repository

### Critical Bugs (Must Fix)
| Issue # | Title | Description | Effort (1-5) | Status | Link |
|---------|-------|-------------|--------------|--------|------|
| #40 | Deposit cap bug | First deposit permanently fixes daily cap | 4 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/40) |
| #39 | No dues enforcement | No "exact dues" enforcement for deposits | 3 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/39) |
| #38 | Withdrawables bug | Large requests don't reduce member withdrawables | 4 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/38) |

### Core Features
| Issue # | Title | Description | Effort (1-5) | Status | Link |
|---------|-------|-------------|--------------|--------|------|
| #46 | Account abstraction | Breaking the account abstraction pattern for request creation | 4 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/46) |
| #42 | Flexible creation | Enable Breadfund Creation Without Specifying All Users | 3 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/42) |
| #32 | Automated deposits | ERC20 Allowance-Based Deposits and Batch Account Abstraction | 4 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/32) |
| #19 | Deposit on behalf | Add deposit on behalf of user using ERC20 balance | 3 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/19) |
| #14 | Contestation logic | Change Contestation Threshold Logic for Withdrawal | 3 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/14) |
| #11 | View methods | Add view methods aggregating all frontend data | 2 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/11) |

### Risk & Financial Management
| Issue # | Title | Description | Effort (1-5) | Status | Link |
|---------|-------|-------------|--------------|--------|------|
| #33 | Withdrawal delay | Research blanket withdrawal delay for liquidity | 3 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/33) |
| #31 | Prime-based crediting | Actuarial entitlement, not deposit-linked | 4 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/31) |
| #30 | Liquidity ratio | Liquidity-aware epoch ratio | 3 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/30) |
| #29 | Risk ratio formula | Develop Context-Aware Risk Ratio Formula | 4 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/29) |
| #25 | Lock ratio | Lock ratio to 1 (disable leverage) | 2 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/25) |
| #23 | Input validation | Add validation to prevent unsafe ratio values | 2 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/23) |
| #21 | Leverage research | Liquidity-safe ratio > 1 (leverage & solvency) | 5 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/21) |

### Testing & Documentation
| Issue # | Title | Description | Effort (1-5) | Status | Link |
|---------|-------|-------------|--------------|--------|------|
| #41 | Design variables | Give design team list of configurable variables | 2 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/41) |
| #27 | Layman explanation | Create simple explanation of system | 2 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/27) |
| #24 | Notifications | Notification Options for Withdrawal Voting Result | 3 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/24) |
| #13 | Comprehensive tests | Create tests for all contract functionality | 4 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/13) |
| #12 | Member limits | Should struct include min/max members? | 2 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/12) |
| #9 | Breadfunds Spec | Core specification document | 3 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/9) |
| #8 | Insurance spec | Bread Mutual Insurance fund spec V1.5 | 3 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/8) |
| #4 | Sliding scale | Sliding participation scale for users | 3 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/4) |
| #2 | Breadfunds Spec | Original specification document | 3 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/2) |

### Proposals for V2
| Issue # | Title | Description | Effort (1-5) | Status | Link |
|---------|-------|-------------|--------------|--------|------|
| #28 | V2 Proposals | Proposals for V2 development | 3 | OPEN | [Link](https://github.com/BreadchainCoop/breadfunds/issues/28) |

### Closed Issues (Completed)
- #47: Rebranding (initial work done)
- #37: Fixed withdrawal request vulnerability
- #36: Fixed duplicate members in create()
- #34: Renamed executeContestedWithdrawl typo
- #22: Tracked liquidity and solvency risk
- #18: User research budget proposal
- #17: Added unit tests
- #16: Fuzzy testing implementation
- #7: Added withdrawal limit for small amounts
- #6: Decoupled decommission querying
- #5: Removed constants
- #3: Voting auto execute

## Production Readiness Checklist

### Must Have for Launch
- [ ] Repository rebranding complete (BreadFunds → Safety Net)
- [ ] Critical bugs fixed (Issues #40, #38, #39)
- [ ] Smart contracts audited and deployed
- [ ] Basic frontend functional
- [ ] Core deposit/withdrawal functionality working
- [ ] Input validation implemented
- [ ] Basic test coverage
- [ ] User documentation created

### Nice to Have
- [ ] Automated deposits via allowances
- [ ] Advanced risk ratio formulas
- [ ] Comprehensive fuzz testing
- [ ] Notification system
- [ ] Prime-based crediting
- [ ] Sliding participation scales

## Success Metrics
- Successfully deploy Safety Net v1 smart contracts
- Zero critical bugs in production
- Support at least 5 active mutual aid groups
- Process $5,000+ in mutual aid transactions
- Complete documentation for contract interaction
- Pass security audit with no critical findings
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

## Strategic Context
Safety Net is part of the broader Solidarity Primitives expansion, aimed at building applications that facilitate the solidarity economy even if they don't attract traditional investment. It provides essential mutual aid infrastructure for communities.

## Technical Requirements
- Smart contract architecture design
- Security considerations and audit preparation
- Integration with existing Bread Cooperative infrastructure
- User interface planning for future development

## Current Status
- **Status**: Q4 Target - Production Launch Required
- **Priority**: Part of Priority 3 - Solidarity Primitives expansion
- **Repositories**: 
  - [breadfunds](https://github.com/BreadchainCoop/breadfunds) (needs rebranding to safety-net)
  - [breadfunds-app](https://github.com/BreadchainCoop/breadfunds-app) (needs rebranding to safety-net-app)
- **Open Issues**: 29 in contracts, 2 in app
- **Critical Bugs**: 3 must-fix before launch