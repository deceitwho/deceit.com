// Initialize vote counts
let scamVotes = localStorage.getItem('scamVotes') || 0;
let trustedVotes = localStorage.getItem('trustedVotes') || 0;

// Display initial vote counts
document.getElementById('scamVotes').textContent = scamVotes;
document.getElementById('trustedVotes').textContent = trustedVotes;

// Function to handle voting
function vote(type) {
    if (type === 'scam') {
        scamVotes++;
        localStorage.setItem('scamVotes', scamVotes);
        document.getElementById('scamVotes').textContent = scamVotes;
        alert('You voted: Scam');
    } else if (type === 'trusted') {
        trustedVotes++;
        localStorage.setItem('trustedVotes', trustedVotes);
        document.getElementById('trustedVotes').textContent = trustedVotes;
        alert('You voted: Trusted');
    }
}
