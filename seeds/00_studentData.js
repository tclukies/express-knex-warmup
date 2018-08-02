exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("studentData")
        .del()
        .then(function() {
            // Inserts seed entries
            return knex("studentData").insert([
                {
                    first_name: "Will",
                    last_name: "Kirkhope",
                    prev_occupation: "Personal Trainer",
                    hometown: "San Diego"
                },
                {
                    first_name: "Josh",
                    last_name: "Lovely",
                    prev_occupation: "Fortune Teller",
                    hometown: "Imaginationland"
                },
                {
                    first_name: "R.J.",
                    last_name: "Kirkhope",
                    prev_occupation: "Stuntman",
                    hometown: "San Diego"
                },
                {
                    first_name: "Ben",
                    last_name: "Austin",
                    prev_occupation: "Social Work",
                    hometown: "Denver"
                },
                {
                    first_name: "Mark",
                    last_name: "Newcomb",
                    prev_occupation: "Already was a web developer yo",
                    hometown: "Hays"
                },
                {
                    first_name: "Tom",
                    last_name: "Lee",
                    prev_occupation: "Sales Manager",
                    hometown: "Colorado Springs"
                },
                {
                    first_name: "Natalie",
                    last_name: "Todd",
                    prev_occupation: "Recruiter",
                    hometown: "Anchorage"
                },
                {
                    first_name: "Michael",
                    last_name: "Coons",
                    prev_occupation: "Director of IT",
                    hometown: "Bloomington"
                },
                {
                    first_name: "Danny",
                    last_name: "Pifer",
                    prev_occupation: "QA Tester",
                    hometown: "San Francisco"
                },
                {
                    first_name: "Ryan",
                    last_name: "McCrory",
                    prev_occupation: "U.S. Army",
                    hometown: "Denver"
                },
                {
                    first_name: "Matt",
                    last_name: "Huston",
                    prev_occupation: "Valet",
                    hometown: "Littleton"
                }
            ]);
        });
};
