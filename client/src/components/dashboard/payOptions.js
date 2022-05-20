const payOptions = [
    {
        key: 1,
        title: "Deposit Frequency",
        description: "This determines how often to deposity money in to the CommunityJar. All withdrawals are done on Monday at 06:00 AM ET"
    },

    {
        key: 2,
        title: "Deposity Amount",
        description: "This is the amount that will be deposited into the jar by each of the members",
    },

    {
        key: 3,
        title: "Withdraw Frequency",
        description: "This determines how often to withdraw money from the CommunityJar and distribute to winning players. Must be greater than Deposity Frequency"
    }
]

export default payOptions;