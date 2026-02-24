import Map "mo:core/Map";
import Text "mo:core/Text";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  type Skill = {
    name : Text;
    level : Nat;
  };

  type Project = {
    name : Text;
    description : Text;
    link : Text;
    skillsUsed : [Skill];
  };

  type Portfolio = {
    bio : Text;
    skills : [Skill];
    projects : [Project];
  };

  let portfolios = Map.empty<Text, Portfolio>();

  public shared ({ caller }) func createPortfolio(username : Text, bio : Text, skills : [Skill], projects : [Project]) : async () {
    if (portfolios.containsKey(username)) {
      Runtime.trap("Portfolio for " # username # " already exists");
    };

    let newPortfolio : Portfolio = {
      bio;
      skills;
      projects;
    };

    portfolios.add(username, newPortfolio);
  };

  public shared ({ caller }) func addProject(username : Text, project : Project) : async () {
    switch (portfolios.get(username)) {
      case (null) {
        Runtime.trap("No portfolio found for given user");
      };
      case (?portfolio) {
        let projects = List.fromArray<Project>([project]);
        let updatedPortfolio : Portfolio = {
          bio = portfolio.bio;
          skills = portfolio.skills;
          projects = projects.toArray().concat(portfolio.projects);
        };
        portfolios.add(username, updatedPortfolio);
      };
    };
  };

  public shared ({ caller }) func addSkill(username : Text, skill : Skill) : async () {
    switch (portfolios.get(username)) {
      case (null) {
        Runtime.trap("No portfolio found for given user");
      };
      case (?portfolio) {
        let skillArray = List.fromArray<Skill>([skill]);
        let updatedPortfolio : Portfolio = {
          bio = portfolio.bio;
          skills = skillArray.toArray().concat(portfolio.skills);
          projects = portfolio.projects;
        };
        portfolios.add(username, updatedPortfolio);
      };
    };
  };

  public query ({ caller }) func getPortfolio(username : Text) : async Portfolio {
    switch (portfolios.get(username)) {
      case (null) {
        Runtime.trap("No portfolio found for given user");
      };
      case (?portfolio) {
        portfolio;
      };
    };
  };
};
