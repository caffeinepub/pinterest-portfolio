import Text "mo:core/Text";
import Nat "mo:core/Nat";
import List "mo:core/List";
import Runtime "mo:core/Runtime";



actor {
  public type ReferralLink = {
    id : Nat;
    title : Text;
    description : Text;
    category : Text;
    targetUrl : Text;
    thumbnailPath : Text;
    clickCount : Nat;
  };

  let referralLinks = List.empty<ReferralLink>();

  public type Contact = {
    name : Text;
    email : Text;
    message : Text;
  };

  let contacts = List.empty<Contact>();

  public shared ({ caller }) func submitContact(name : Text, email : Text, message : Text) : async () {
    let contact : Contact = {
      name;
      email;
      message;
    };
    contacts.add(contact);
  };

  public shared ({ caller }) func redirectAndTrackClick(id : Nat) : async Text {
    switch (getReferralLinkByIdInternal(id)) {
      case (null) { Runtime.trap("Referral link not found") };
      case (?link) {
        let updatedLink = {
          id = link.id;
          title = link.title;
          description = link.description;
          category = link.category;
          targetUrl = link.targetUrl;
          thumbnailPath = link.thumbnailPath;
          clickCount = link.clickCount + 1;
        };

        let linksCopy = referralLinks.toVarArray();
        if (id < linksCopy.size()) {
          linksCopy[id] := updatedLink;
          referralLinks.clear();
          for (link in linksCopy.values()) {
            referralLinks.add(link);
          };
        } else {
          Runtime.trap("Index out of bounds");
        };

        link.targetUrl;
      };
    };
  };

  public query ({ caller }) func getReferralLinkById(id : Nat) : async ?ReferralLink {
    getReferralLinkByIdInternal(id);
  };

  func getReferralLinkByIdInternal(id : Nat) : ?ReferralLink {
    if (id >= referralLinks.size()) {
      null;
    } else {
      ?referralLinks.at(id);
    };
  };

  public query ({ caller }) func getAllReferralLinks() : async [ReferralLink] {
    referralLinks.toArray();
  };
};
