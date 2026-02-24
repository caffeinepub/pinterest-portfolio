import List "mo:core/List";

module {
  type ReferralLink = {
    id : Nat;
    title : Text;
    description : Text;
    category : Text;
    targetUrl : Text;
    thumbnailPath : Text;
    clickCount : Nat;
  };

  public type Contact = {
    name : Text;
    email : Text;
    message : Text;
  };

  type OldActor = {
    contacts : List.List<Contact>;
    referralLinks : List.List<ReferralLink>;
  };

  type NewActor = OldActor;

  public func run(old : OldActor) : NewActor {
    let newReferral : ReferralLink = {
      id = 1;
      title = "Nioxin System 2 Cleanser Shampoo";
      description = "Professional strengthening shampoo for natural hair with progressed thinning. 33.8 Fl Oz";
      category = "Hair Care";
      targetUrl = "https://amzn.to/3OzRf1C";
      thumbnailPath = "images/nioxin-system2-shampoo.png";
      clickCount = 0;
    };

    old.referralLinks.add(newReferral);
    old;
  };
};
