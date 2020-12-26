<template><d-container fluid class="main-content-container">

                      <d-card class="card-small" style="margin-top:30px;">

            <!-- Form Example -->
            <d-card-header class="border-bottom">
              <h6 class="m-0">Profile</h6>
            </d-card-header>

            <d-list-group flush>
              <d-list-group-item>
                <d-row>
                  <d-col>
                    <d-form>

                      <div class="form-group">
                        <label for="feInputAddress">Person in charge</label>
                        <d-input id="feInputAddress" placeholder="Name..." />
                      </div>
                      <div class="form-group">
                        <label for="feInputAddress">Nature of Business</label>
                        <d-input id="feInputAddress" placeholder="Business..." />
                      </div>

                      <div class="form-group">
                        <label for="feInputAddress2">Address</label>
                        <d-input id="feInputAddress2" placeholder="Apartment, Studio, or Floor" />
                      </div>

                      <d-form-row>
                        <d-col md="6" class="form-group">
                          <label for="feInputCity">Contact Number</label>
                          <d-input id="feInputCity" />
                        </d-col>
                        <d-col md="6" class="form-group">
                          <label for="feInputZip">Email</label>
                          <d-input id="feInputZip" />
                        </d-col>
                      </d-form-row>
                    </d-form>
                  </d-col>
                </d-row>
              </d-list-group-item>
            </d-list-group>

          </d-card></d-container>
</template>
