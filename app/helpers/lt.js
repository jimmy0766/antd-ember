import Ember from 'ember';
import { ltHelper } from 'ember-cli-idcos/helpers/lt';

var forExport = null;

if (Ember.Helper) {
  forExport = Ember.Helper.helper(ltHelper);
} else if (Ember.HTMLBars.makeBoundHelper) {
  forExport = Ember.HTMLBars.makeBoundHelper(ltHelper);
}

export default forExport;
