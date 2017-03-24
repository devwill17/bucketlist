var mongoose = require('mongoose');

var ListSchema = new mongoose.Schema({

    _creator: { type: mongoose.Schema.ObjectId, ref: 'User', required: true
    },

    title: { type: String, required: true,
        minlength: [5, "ALERT: TITLE MUST BE AT LEAST 5 LETTERS"]
    },

    description: { type: String, required: true,
        minlength: [10, "ALERT: DESCRIPTION MUST BE AT LEAST 10 LETTERS"]
    },

    tagged: { type: mongoose.Schema.ObjectId, ref: 'User', required: true
    },

    status: { type: String, default: "0"
    }
}, { timestamps: true
});

mongoose.model('List', ListSchema);
