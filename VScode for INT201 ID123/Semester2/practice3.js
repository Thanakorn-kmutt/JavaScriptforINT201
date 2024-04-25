class Membership {
    static autoId = 0
    constructor() {
        this.members = []
    }


    subscribe(name) {
        const existingIndex = this.findMemberName(name)
        if (existingIndex !== -1) {
            return -1
        }else{
            this.members.push({
            memberId: Membership.autoId++,
            memberName: name,
        })
        }
        return this.members.length


    }

    unsubscribe(id) {
        if (id == undefined) {
            return -1
        }
        const index = this.findMemberId(id);
        if (index == -1) {
            return -1
        }
        return this.members.splice(index, 1)[0].memberId
    }


    findMemberId(id) {
        return this.members.findIndex((member) => member.memberId === id)

    }

    findMemberName(name) {
        return this.members.findIndex((member) => member.memberName === name)
    }
}

members = new Membership()
console.log(members.subscribe("name0"))
console.log(members.subscribe("name1"))
console.log(members.subscribe("name2"))
console.log(members.subscribe("name3"))

console.log(members)

console.log("Member Id removed: "+members.unsubscribe(0))
console.log("Member Id removed: "+members.unsubscribe(2))

console.log(members)
